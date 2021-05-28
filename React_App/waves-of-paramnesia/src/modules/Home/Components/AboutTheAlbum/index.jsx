import React from 'react'
import './styles.scss';




const Artwork = ({artworkLink, title}) => (
    <img src={artworkLink} alt={title}/>
)
export default function AboutTheAlbum({aboutData}) {

    const {title, artwork, inThisAlbum} = aboutData;
    console.log(aboutData)
    return ( 
        <main>
          {title ? <h2>{title}</h2> : null}
          {artwork ? <Artwork /> : null}
        </main>
    )
}
