import React from 'react';
import AboutTheAlbum from 'modules/Home/Components/AboutTheAlbum'

import aboutRegretsData from '../../../../resources/seed/regretsandgrievances.json';

export default function AboutRegrets() {
    return (
        <section id="regrets" aria-label="Regrets and Grievances">
            <AboutTheAlbum showTitle aboutData={aboutRegretsData}/>
        </section>
    )
}
