import List from 'library/common/components/List';
import SectionHeader from 'library/common/components/SectionHeader';
import { contentConstants } from 'library/common/constants/ContentConstants';
import React from 'react'
import './styles.scss';




const Artwork = ({artworkLink, title}) => (
    <img src={artworkLink} alt={title} className="artwork-img"/>
)


export default function AboutTheAlbum({aboutData = {}, showTitle = false}) {

    const {title, artwork, inThisAlbum, mustListen, songsInAlbum} = aboutData;
    return ( 
        <main>
          {title & showTitle ? <SectionHeader title={title}/> : null}
          {artwork ? <Artwork artworkLink={artwork} alt={title} /> : null}
          <List list={inThisAlbum} label={contentConstants.DETAILS_LIST_HEADER}/>
          <List list={mustListen} label={contentConstants.MUST_LISTEN_LIST_HEADER}/>
          <List list={songsInAlbum} label={contentConstants.SONGS_LIST_HEADER}/>
        </main>
    )
}
