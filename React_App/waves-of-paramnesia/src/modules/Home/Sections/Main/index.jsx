import Header from 'library/common/components/Header'
import { contentConstants } from 'library/common/constants/ContentConstants';
import React from 'react'
import './styles.scss';

const MainParagraph = () => (
    <p>
        {contentConstants.HEADER_CONTENT}
    </p>
)


export default function Main() {
    return (
        <section id="waves-main" aria-label="Darzini Spotify and Music">
            <Header />
            <MainParagraph />
        </section>
    )
}
