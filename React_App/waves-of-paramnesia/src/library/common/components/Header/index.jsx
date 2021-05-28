import React from 'react'
import {contentConstants} from '../../constants/ContentConstants';

import './styles.scss'

export default function Header() {
    return (
        <React.Fragment>
            <h1>    
                {contentConstants.HEADER_TITLE}
            </h1>
        </React.Fragment>
    )
}
