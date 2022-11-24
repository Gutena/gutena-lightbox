<?php // @codingStandardsIgnoreLine
/**
 * Plugin Name:     Gutena Lightbox
 * Description:     Gutena Lightbox
 * Version:         1.0.1
 * Author:          ExpressTech
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutena-lightbox
 *
 * @package         gutena-lightbox
 */

defined( 'ABSPATH' ) || exit;

/**
 * Abort if the class is already exists.
 */
if ( ! class_exists( 'Gutena_Lightbox' ) ) {

	/**
	 * Gutena Lightbox class.
	 *
	 * @class Main class of the plugin.
	 */
	class Gutena_Lightbox {

		/**
		 * Plugin version.
		 *
		 * @var string
		 */
		public $version = '1.0.1';

		/**
		 * Instance of this class.
		 *
		 * @since 1.0.0
		 * @var object
		 */
		protected static $instance;

		/**
		 * Get the singleton instance of this class.
		 *
		 * @since 1.0.0
		 * @return Gutena_Lightbox
		 */
		public static function get() {
			if ( ! ( self::$instance instanceof self ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			add_action( 'init', [ $this, 'register' ] );
			add_filter( 'block_categories_all', [ $this, 'register_category' ], 10, 2 );
		}

		/**
		 * Register required functionalities.
		 */
		public function register() {
			// Register blocks.
			register_block_type( __DIR__ . '/build' );
			register_block_type( __DIR__ . '/build/play-button', [
				'render_callback' => [ $this, 'render_block' ],
			] );

			// Enqueue assets.
			wp_register_style( 'gutena-lightbox-tingle', plugins_url( 'assets/tingle.min.css', __FILE__ ), [], $this->version );
			wp_register_script( 'gutena-lightbox-tingle', plugins_url( 'assets/tingle.min.js', __FILE__ ), [], $this->version, true );

			// Add dependencies.
			$wp_styles = wp_styles()->query( 'gutena-lightbox-style', 'registered' );
			if ( $wp_styles && ! in_array( 'gutena-lightbox-tingle', $wp_styles->deps ) ) {
				$wp_styles->deps[] = 'gutena-lightbox-tingle';
			}

			$wp_scripts = wp_scripts()->query( 'gutena-lightbox-script', 'registered' );
			if ( $wp_scripts && ! in_array( 'gutena-lightbox-tingle', $wp_scripts->deps ) ) {
				$wp_scripts->deps[] = 'gutena-lightbox-tingle';
			}
		}

		/**
		 * Render Gutena play button block.
		 */
		public function render_block( $attributes, $content, $block ) {
			add_action( 'wp_head', function() use ( $attributes ) {
				printf(
					'<style id="gutena-play-button-css-%1$s">.gutena-play-button-block-%1$s { %2$s }</style>',
					esc_attr( $attributes['uniqueId'] ),
					esc_html( $this->render_css( $attributes['blockStyles'] ) )
				);
			} );

			return $content;
		}

		/**
		 * Generate dynamic styles
		 *
		 * @param array $styles
		 * @return string
		 */
		private function render_css( $styles ) {
			$style = [];
			foreach ( (array) $styles as $key => $value ) {
				$style[] = $key . ': ' . $value;
			}

			return join( ';', $style );
		}

		/**
		 * Register block category.
		 */
		public function register_category( $block_categories, $editor_context ) {
			$fields = wp_list_pluck( $block_categories, 'slug' );
			
			if ( ! empty( $editor_context->post ) && ! in_array( 'gutena', $fields, true ) ) {
				array_push(
					$block_categories,
					[
						'slug'  => 'gutena',
						'title' => __( 'Gutena', 'gutena-lightbox' ),
					]
				);
			}

			return $block_categories;
		}
	}
}

/**
 * Check the existance of the function.
 */
if ( ! function_exists( 'Gutena_Lightbox_init' ) ) {
	/**
	 * Returns the main instance of Gutena_Lightbox to prevent the need to use globals.
	 *
	 * @return Gutena_Lightbox
	 */
	function Gutena_Lightbox_init() {
		return Gutena_Lightbox::get();
	}

	// Start it.
	Gutena_Lightbox_init();
}