/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor'

export default function save( { attributes } ) {
    const { 
        uniqueId,
        buttonShape,
        buttonType,
        rippleEffect, 
        videoUrl, 
        videoAction 
    } = attributes

    const btnClassName =  `play-button ${ buttonShape } ${ buttonType }`

	const blockProps = useBlockProps.save( {
        className: `gutena-play-button-block gutena-play-button-block-${ uniqueId }`,
    } );

	return (
        <div { ...blockProps }>
            <a className={ btnClassName } href={ videoUrl } target="_blank" data-action={ videoAction } data-ripple={ rippleEffect } rel="noopener">
                <i className="play-icon"></i>
            </a>
        </div>
	);
}