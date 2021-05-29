import List from 'library/common/components/List'
import SectionHeader from 'library/common/components/SectionHeader'
import { contentConstants } from 'library/common/constants/ContentConstants'
import React from 'react'

import achievementsData from '../../../../resources/seed/achievements.json'
import AchievementText from './AchievementText'

import './styles.scss';


export default function Achievements() {

    const VideoContainer = ({videoSrc}) => (
        <div class="video-container" aria-label="Video Container">
            <video controls width="640" height="480">
                <source src={videoSrc} />
                <track kind="captions" srclang="en" label="english_captions"/>
                Your browser does not support the Video Tag
            </video>
         </div>
    )
    
    const BlockQuote = ({blockQuote}) => (
        <blockquote cite="https://theindianmusicdiaries.com/singles-roundup-14-diversify-your-playlist-with-these-latest-tracks/">
            {blockQuote}
        </blockquote>
    
    )
    return (
        <section id="achievements" aria-label="Achievements">
        <main>
            <SectionHeader title={contentConstants.ACHIEVEMENTS_HEADER} />
            <List list={achievementsData}/>


            <AchievementText text={contentConstants.ACHIEVEMENTS_ARTICLE_DESCRIPTION}/>
            <BlockQuote blockQuote={contentConstants.ACHIEVEMENTS_BLOCKQUOTE}/>
            <AchievementText text={contentConstants.ACHIEVEMENTS_VIDEO_DESCRIPTION}/>
            <VideoContainer videoSrc={require('../../../../resources/video/metallica.mp4')}/>
        </main>
    </section>
    )
}
