/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element'
import {  
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption, 
    __experimentalSpacer as Spacer, 
    PanelBody, 
    TextControl, 
    RangeControl, 
    ToggleControl 
} from '@wordpress/components';
import { 
    InspectorControls, 
    PanelColorSettings, 
    useBlockProps 
} from '@wordpress/block-editor';

const gutenaLightboxUniqueIds = [];

export default function edit( { clientId, attributes, setAttributes } ) {
    const { 
        uniqueId,
        buttonShape,
        buttonType,
        rippleEffect, 
        buttonRadius, 
        buttonWidth, 
        iconSize, 
        iconColor, 
        buttonColor, 
        iconColorHover, 
        buttonColorHover, 
        videoUrl, 
        videoAction,
        blockStyles
    } = attributes

    useEffect( () => {
        if ( ! uniqueId || gutenaLightboxUniqueIds.includes( uniqueId ) ) {
			setAttributes( {
				uniqueId: clientId.substr( 2, 9 ),
			} );
			gutenaLightboxUniqueIds.push( clientId.substr( 2, 9 ) );
		} else {
			gutenaLightboxUniqueIds.push( uniqueId );
		}
    }, [] )

    const btnClassName =  `play-button ${ buttonShape } ${ buttonType }`

	const blockProps = useBlockProps( {
        className: `gutena-play-button-block gutena-play-button-block-${ uniqueId }`,
    } )

    const dynamicStyles = {
        '--gutena--lightbox-radius': buttonRadius + 'px',
        '--gutena--lightbox-button-width': buttonWidth + 'px',
        '--gutena--lightbox-icon-size': iconSize + 'px',
        '--gutena--lightbox-icon-color': iconColor,
        '--gutena--lightbox-button-color': buttonColor,
        '--gutena--lightbox-icon-hover-color': iconColorHover,
        '--gutena--lightbox-button-hover-color': buttonColorHover,
    }

    const customStyles = JSON.stringify( dynamicStyles )
    useEffect( () => {
        if ( customStyles != JSON.stringify( blockStyles ) ) {
			setAttributes( {
				blockStyles: dynamicStyles,
			} );
        }
    }, [ customStyles ] )

    const renderCSS = (
		<style>
			{`
				.gutena-play-button-block-${ uniqueId } {
					${ Object.entries( dynamicStyles ).map( ( [ k, v ] ) => `${ k }:${ v }` ).join( ';' ) }
				}
			`}
		</style>
	);

	return (
		<>
			<InspectorControls key="settings">
                <PanelBody title={ __( 'Styles', 'gutena-lightbox' ) }>
                    <ToggleGroupControl 
                        label={ __( 'Shape', 'gutena-lightbox' ) } 
                        value={ buttonShape } 
                        onChange={ ( value ) => setAttributes( { buttonShape: value } ) } 
                        isBlock>
                        <ToggleGroupControlOption value="circle" label={ __( 'Circle', 'gutena-lightbox' ) } />
                        <ToggleGroupControlOption value="square" label={ __( 'Square', 'gutena-lightbox' ) } />
                    </ToggleGroupControl>
                    <ToggleGroupControl 
                        label={ __( 'Type', 'gutena-lightbox' ) } 
                        value={ buttonType } 
                        onChange={ ( value ) => setAttributes( { buttonType: value } ) } 
                        isBlock>
                        <ToggleGroupControlOption value="filled" label={ __( 'Fill', 'gutena-lightbox' ) } />
                        <ToggleGroupControlOption value="bordered" label={ __( 'Border', 'gutena-lightbox' ) } />
                    </ToggleGroupControl>
                    {
                        buttonShape === 'circle'
                        ?  <Spacer marginTop={ 8 } marginBottom={ 8 }>
                                <ToggleControl
                                    label={ __( 'Enable Ripple Effect', 'gutena-lightbox' ) }
                                    checked={ rippleEffect }
                                    onChange={ () => {
                                        setAttributes( { rippleEffect: ! rippleEffect } )
                                    } }
                                />
                            </Spacer>
                        : <RangeControl
                            label={ __( 'Radius', 'gutena-lightbox' ) }
                            value={ buttonRadius }
                            onChange={ ( value ) => setAttributes( { buttonRadius: value } ) }
                            max={ 50 }
                        />
                    }
                    <RangeControl
                        label={ __( 'Button width', 'gutena-lightbox' ) }
                        value={ buttonWidth }
                        onChange={ ( value ) => setAttributes( { buttonWidth: value } ) }
                    />
                    <RangeControl
                        label={ __( 'Icon size', 'gutena-lightbox' ) }
                        value={ iconSize }
                        onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                        min={ 5 }
                        max={ 30 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Video Source', 'gutena-lightbox' ) }>
                    <TextControl
                        label={ __( 'Video URL', 'gutena-lightbox' ) }
                        value={ videoUrl }
                        onChange={ ( value ) => setAttributes( { videoUrl: value } ) }
                        help={ __( 'Supports YouTube and Vimeo', 'gutena-lightbox' ) }
                    />
                    <ToggleGroupControl 
                        label={ __( 'On click action', 'gutena-lightbox' ) } 
                        value={ videoAction } 
                        onChange={ ( value ) => setAttributes( { videoAction: value } ) } 
                        isBlock>
                        <ToggleGroupControlOption value="lightbox" label={ __( 'Lightbox', 'gutena-lightbox' ) } />
                        <ToggleGroupControlOption value="newtab" label={ __( 'New Tab', 'gutena-lightbox' ) } />
                    </ToggleGroupControl>
                </PanelBody>
                <PanelColorSettings
                    title={ __( 'Play Button Colors', 'gutena-lightbox' ) }
                    colorSettings={ [
                        {
                            value: iconColor,
                            onChange: ( value ) => setAttributes( { iconColor: value } ),
                            label: __( 'Icon color', 'gutena-lightbox' ),
                        },
                        {
                            value: iconColorHover,
                            onChange: ( value ) => setAttributes( { iconColorHover: value } ),
                            label: __( 'Icon hover color', 'gutena-lightbox' ),
                        },
                        {
                            value: buttonColor,
                            onChange: ( value ) => setAttributes( { buttonColor: value } ),
                            label: __( 'Button color', 'gutena-lightbox' ),
                        },
                        {
                            value: buttonColorHover,
                            onChange: ( value ) => setAttributes( { buttonColorHover: value } ),
                            label: __( 'Button hover color', 'gutena-lightbox' ),
                        }
                    ] }
                />
            </InspectorControls>

            { renderCSS }
			<div { ...blockProps }>
                <a className={ btnClassName } href={ videoUrl } target="_blank" data-action={ videoAction } data-ripple={ rippleEffect } rel="noopener">
                    <i className="play-icon"></i>
                </a>
			</div>
		</>
	);
}