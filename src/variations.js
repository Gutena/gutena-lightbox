/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import placeholderImage from './image.jpg';

/**
 * Template option choices for predefined columns layouts.
 */
const variations = [
    {
        name: 'default',
        title: __( 'Default' ),
        description: __( 'Default Style' ),
        isDefault: true,
        innerBlocks: [ 
            [ "gutena/play-button", { buttonColor: "#3f6de4", iconColor: "#ffffff" } ],
            [ "core/paragraph", { content: "A Message from CEO", align: "center", style: { typography: { fontSize: "18px" }, spacing: { padding: { top: "0px", right: "0px", bottom: "0px", left: "0px" }, margin: { top: "0px", bottom: "0px" } } } } ]
        ],
        scope: [ 'block' ],
    },
    {
        name: 'style-one',
        title: __( 'Style 1' ),
        description: __( 'Style 1 - Circle' ),
        icon: (
            <svg width="534" height="352" viewBox="0 0 534 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="533.684" height="351.411" fill="#CCD5EC"/>
                <circle cx="267" cy="176" r="38" fill="white"/>
                <path d="M258.837 163.915L282.283 176.439L259.714 190.481L258.837 163.915Z" fill="#3F6DE4"/>
            </svg>
        ),
        innerBlocks: [ 
            [ "core/cover", { url: placeholderImage, dimRatio: 50, overlayColor: "primary" }, [
                [ "gutena/play-button" ],
                [ "core/paragraph", { content: "A Message from CEO", align: "center", style: { typography: { fontSize: "18px" }, spacing: { padding: { top: "10px", right: "0px", bottom: "0px", left: "0px" }, margin: { top: "0px", bottom: "0px" } } } } ]
            ] ]
        ],
        scope: [ 'block' ],
    },
    {
        name: 'style-two',
        title: __( 'Style 2' ),
        description: __( 'Style 2 - Square' ),
        icon: (
            <svg width="534" height="352" viewBox="0 0 534 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="533.684" height="351.411" fill="#CCD5EC"/>
                <rect x="228" y="137" width="78" height="78" fill="white"/>
                <path d="M258.837 162.915L282.283 175.439L259.714 189.481L258.837 162.915Z" fill="#3F6DE4"/>
            </svg>
        ),
        innerBlocks: [
            [ "core/cover", { url: placeholderImage, dimRatio: 50, overlayColor: "primary" }, [
                [ "gutena/play-button", { buttonShape: "square" } ],
                [ "core/paragraph", { content: "A Message from CEO", align: "center", style: { typography: { fontSize: "18px" }, spacing: { padding: { top: "10px", right: "0px", bottom: "0px", left: "0px" }, margin: { top: "0px", bottom: "0px" } } } } ]
            ] ]
        ],
        scope: [ 'block' ],
    }
];

export default variations;