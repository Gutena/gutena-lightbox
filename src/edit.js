
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { 
	__experimentalBlockVariationPicker as BlockVariationPicker, 
	useBlockProps, 
	useInnerBlocksProps,
	store as blockEditorStore
} from '@wordpress/block-editor';

import variations from './variations'
import './editor.scss';

function EditContainer() {
    const blockProps = useBlockProps( {
        className: 'gutena-lightbox-block',
    } );
    
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        orientation: 'horizontal',
        renderAppender: false,
    } );

    return <div { ...innerBlocksProps } />;
}

function Placeholder( { clientId, setAttributes } ) {
    const defaultVariation = variations.filter( item => item.isDefault )[0] || variations[0];

    const { replaceInnerBlocks } = useDispatch( blockEditorStore );
    const blockProps = useBlockProps( {
        className: 'gutena-lightbox-block',
    } );

    return (
        <div { ...blockProps }>
            <BlockVariationPicker
                label={ __( 'Lightbox Style', 'gutena-lightbox' ) }
                instructions={ __( 'Select a Lightbox style to start with.', 'gutena-lightbox' ) }
                variations={ variations }
                onSelect={ ( variation = defaultVariation ) => {
                    if ( variation.attributes ) {
                        setAttributes( variation.attributes );
                    }
                    if ( variation.innerBlocks ) {
                        replaceInnerBlocks(
                            clientId,
                            createBlocksFromInnerBlocksTemplate(
                                variation.innerBlocks
                            ),
                            true
                        );
                    }
                } }
                allowSkip
            />
        </div>
    );
}

export default function edit( props ) {
    const { clientId } = props;
    const hasInnerBlocks = useSelect(
        ( select ) =>
            select( blockEditorStore ).getBlocks( clientId ).length > 0,
        [ clientId ]
    );
    const Component = hasInnerBlocks
        ? EditContainer // display the inner blocks
        : Placeholder;  // or the variation picker

    return <Component { ...props } />;
}