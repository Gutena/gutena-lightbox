import { __ } from '@wordpress/i18n';

document.addEventListener( 'DOMContentLoaded', () => {
    const lightboxNodeList = document.querySelectorAll( '.gutena-play-button-block a.play-button[data-action="lightbox"]' );
    lightboxNodeList?.forEach( ( el, index ) => {
        el.addEventListener( 'click', event => {
            event.preventDefault()

            let videoUrl = el.getAttribute( 'href' )
            let videoModal = new tingle.modal( {
                closeMethods: [ 'button', 'escape' ],
                cssClass: [ 'gutena-lightbox-modal' ],
                closeLabel: __( "Close", "gutena-lightbox" ),
                onOpen: function() {
                    const lightboxCloseNodeList = document.querySelectorAll( '.gutena-lightbox-close' );
                    lightboxCloseNodeList?.forEach( ( el, index ) => {
                        el.addEventListener( 'click', event => {
                            event.preventDefault()
                            let modal = el.closest( '.tingle-modal' )
                            modal.querySelector( '.tingle-modal__close' ).click()
                        } );
                    } );
                },
                onClose: function () {
                    videoModal.destroy();
                }
            } );
            
            if ( videoUrl?.includes( 'youtu' ) ) {
                videoModal.setContent( gutenaSetContent( '<div class="embed-container"><iframe width="100%" height="400" src="https://www.youtube.com/embed/' + gutenaGetYouTubeId( videoUrl ) + '?autoplay=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe></div>' ) );
            } else if ( videoUrl?.includes( 'vimeo' ) ) {
                videoModal.setContent( gutenaSetContent( '<div class="embed-container"><iframe width="100%" height="400" src="https://player.vimeo.com/video/' + gutenaGetVimeoId( videoUrl ) + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>' ) );
            } else {
                videoModal.setContent( gutenaSetContent( __( "Invalid Link!", "gutena-lightbox" ) ) );
            }

            videoModal.open();
        } );
    } );
} );

function gutenaSetContent( content ) {
    return '<span class="gutena-lightbox-close"><svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"></path></svg></span>' + content;
}

function gutenaGetYouTubeId( url ) {
    url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

function gutenaGetVimeoId( url ) {
    var match = /vimeo.*\/(\d+)/i.exec( url );
    return match ? match[1] : '';
}

