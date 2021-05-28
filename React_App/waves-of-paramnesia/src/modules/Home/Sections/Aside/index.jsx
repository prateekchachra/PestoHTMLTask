import { contentConstants } from 'library/common/constants/ContentConstants'
import React from 'react'

import './styles.scss';

const SpotifyIframe = () => (
    <div className="iframe-container" id="spotify-iframe-container">
        <iframe src="https://open.spotify.com/embed/artist/46erpDvrtJP65LlxdXjktW" className="spotify-iframe" frameborder="0" 
        allowtransparency="true" allow="encrypted-media" title="Spotify | Darzini">
        </iframe>
    </div>
)
export default function Aside() {
    return (
        <aside>
            <p>{contentConstants.ASIDE_CONTENT}</p>
            <audio controls>
                <source src={require('../../../../resources/audio/yeintehaan.mp3')} />
                <track kind="captions"></track>
            </audio>
            <h3>{contentConstants.ASIDE_HEADER}</h3>
            <SpotifyIframe />
		</aside>
    )
}
