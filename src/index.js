/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from "./edit";
import save from './save';

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="2" height="19" fill="#0EA489"/>
            <rect x="21" y="10" width="2" height="11" fill="#0EA489"/>
            <rect x="2" y="5" width="2" height="11" transform="rotate(-90 2 5)" fill="#0EA489"/>
            <rect x="2" y="22" width="2" height="21" transform="rotate(-90 2 22)" fill="#0EA489"/>
            <path d="M19 3.11125L22.1113 0L23 0.888749L19.8887 4L23 7.11125L22.1113 8L19 4.88875L15.8887 8L15 7.11125L18.1113 4L15 0.888749L15.8887 0L19 3.11125Z" fill="#0EA489"/>
            <path d="M14.904 12.5166L10.335 15.6298C10.3025 15.6518 10.2648 15.6645 10.2258 15.6664C10.1869 15.6683 10.1482 15.6594 10.1138 15.6406C10.0794 15.6218 10.0507 15.5938 10.0307 15.5596C10.0106 15.5254 10 15.4863 10 15.4465V9.22018C10 9.18033 10.0106 9.14123 10.0307 9.10706C10.0507 9.07288 10.0794 9.04489 10.1138 9.02608C10.1482 9.00728 10.1869 8.99835 10.2258 9.00025C10.2648 9.00216 10.3025 9.01482 10.335 9.0369L14.904 12.1501C14.9336 12.1702 14.9578 12.1974 14.9745 12.2294C14.9912 12.2614 15 12.2971 15 12.3333C15 12.3696 14.9912 12.4053 14.9745 12.4373C14.9578 12.4692 14.9336 12.4965 14.904 12.5166Z" fill="#0EA489"/>
        </svg>
    )
} );