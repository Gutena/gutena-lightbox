<?php // @codingStandardsIgnoreLine
/**
 * Plugin Name:     Gutena Video Lightbox
 * Description:     Gutena Video Lightbox
 * Version:         1.0.3
 * Author:          ExpressTech
 * Author URI:      https://expresstech.io
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
		public $version = '1.0.3';

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
		}

		/**
		 * Render Gutena play button block.
		 */
		public function render_block( $attributes, $content, $block ) {
			if ( ! empty( $attributes['uniqueId'] ) && ! empty( $attributes['blockStyles'] ) ) {
				$unique_id = $attributes['uniqueId'];
				$style_id = 'gutena-play-button-css-' . $unique_id;
				$css = sprintf(
					'.gutena-play-button-block-%1$s { %2$s }',
					$unique_id,
					$this->render_css( $attributes['blockStyles'] ),
				);

				// print css
				if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'gutena_lightbox_render_head_css', true, $attributes ) ) {
					$this->render_inline_css( $css, $style_id, true );
				}
			}

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
		 * Render Inline CSS helper function
		 *
		 * @param array  $css the css for each rendered block.
		 * @param string $style_id the unique id for the rendered style.
		 * @param bool   $in_content the bool for whether or not it should run in content.
		 */
		private function render_inline_css( $css, $style_id, $in_content = false ) {
			if ( ! is_admin() ) {
				wp_register_style( $style_id, false );
				wp_enqueue_style( $style_id );
				wp_add_inline_style( $style_id, $css );
				if ( 1 === did_action( 'wp_head' ) && $in_content ) {
					wp_print_styles( $style_id );
				}
			}
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

// Gutena Ecosystem init.
if ( file_exists( __DIR__ . '/includes/gutena/gutena-ecosys-onboard/gutena-ecosys-onboard.php' ) ) {
	require_once  __DIR__ . '/includes/gutena/gutena-ecosys-onboard/gutena-ecosys-onboard.php';
}