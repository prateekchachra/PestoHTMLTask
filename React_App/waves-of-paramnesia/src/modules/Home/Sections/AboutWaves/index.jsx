import React from 'react'

import AboutTheAlbum from '../../Components/AboutTheAlbum'
import aboutWavesData from '../../../../resources/seed/wavesofparamnesia.json'

export default function AboutWaves() {
    return (
        <section id="waves" aria-label="About Waves Of Paramnesia - The Album">
                <AboutTheAlbum aboutData={aboutWavesData} />
        </section>
    )
}
