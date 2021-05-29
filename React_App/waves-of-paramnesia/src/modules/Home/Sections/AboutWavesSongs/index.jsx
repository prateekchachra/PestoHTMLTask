import React from 'react'
import SectionHeader from 'library/common/components/SectionHeader'
import { contentConstants } from 'library/common/constants/ContentConstants'
import aboutSongsData from '../../../../resources/seed/wavesaboutsongs.json';
import AboutSong from './AboutSong';

import './styles.scss';

export default function AboutWavesSongs() {
    return (
        <section id="about-waves" aria-label="About Waves Of Paramnesia Songs">
            <main>
                <SectionHeader title={contentConstants.ABOUT_WAVES_SONGS_LABEL}/>
                {aboutSongsData.map((item,index) => <AboutSong song={item} key={index.toString()}/>)}
            </main>
        </section>
    )
}
