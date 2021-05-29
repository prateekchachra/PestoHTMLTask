import React from 'react';
import './styles.scss'
import parse from "html-react-parser";
export default function AboutSong({song}) {

    const {title, youtubeLink, description} = song;

    const YouTubeIFrame = ({youtubeLink, title}) => (
        <div className="iframe-container">
            <iframe src={youtubeLink} className="youtube-iframe" title={title} frameborder={0}
            allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            >
            </iframe>
        </div>
    )

    const Description = ({description}) => (
       <p>{parse(description)}</p>
    )
    return (
        <article>
             <h4>{title}</h4>
            <Description description={description}/>
            <YouTubeIFrame youtubeLink={youtubeLink} title={title}/>
        </article>
    )
}
