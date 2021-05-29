import SectionHeader from 'library/common/components/SectionHeader'
import { contentConstants } from 'library/common/constants/ContentConstants'
import React from 'react'

export default function AboutDarzini() {

    return (
        <section id="about-darzini"  aria-label="About Darzini">
            <main>
                <article>
                    <SectionHeader title={contentConstants.ABOUT_DARZINI_TITLE}/>
                    <img src={require('../../../../resources/images/darzini.jpg')} alt="Darzini - Logo" class="artwork-img"/>
                    <p>{contentConstants.ABOUT_DARZINI_CONTENT}</p>
                </article>
            </main>
		</section>
    )
}
