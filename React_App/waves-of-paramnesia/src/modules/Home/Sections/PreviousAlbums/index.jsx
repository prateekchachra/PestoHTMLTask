import SectionHeader from 'library/common/components/SectionHeader';
import { contentConstants } from 'library/common/constants/ContentConstants';
import React from 'react'


import albumsData from '../../../../resources/seed/albums.json';

import './styles.scss'
const ROWS = [
    "Name",
    "Type",
    "Release Year",
    "Number Of songs",
    "Poster",
    "Spotify Link",
]
export default function PreviousAlbums() {



    const SpotifyLink = ({link, title}) => (
        <a href={link} aria-label={`${title} Spotify`} target="_blank">{title}</a>
    )

    const Poster = ({poster, title}) => (
        <figure>
            <img src={poster} alt={`${title} Album Art`} className="album-art-img" />
            <figcaption>{title} - Album Art</figcaption>
        </figure>
    )
    const AlbumsTable = ({albumsData}) => {
        return (
            <table id="albums-table">
                <thead>
                    <tr>
                        {ROWS.map((item, index) => <th key={index.toString()}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                  {albumsData.map((item,index) => {
                      const {title, type, year, numberOfSongs, image, link} = item;
                      console.log(item)
                     return  (
                      <tr key={index.toString()}>
                          <td>{title}</td>
                          <td>{type}</td>
                          <td>{year}</td>
                          <td>{numberOfSongs}</td>
                          <td><Poster poster={image} title={title}/></td>
                          <td><SpotifyLink link={link} title={title}/></td>
                      </tr>
                  )})}
                </tbody>
            </table>
        )

    }
    return (
        <section id="prev-albums" aria-label="Previous Albums">
            <SectionHeader title={contentConstants.PREVIOUS_ALBUMS_HEADER}/>
            <div style={{overflow: 'auto'}} id="table-container">
            <AlbumsTable albumsData={albumsData}/>
            </div>
        </section>
    )
}
