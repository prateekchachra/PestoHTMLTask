import { contentConstants } from 'library/common/constants/ContentConstants'
import React from 'react'
import Form from './Form'

import './styles.scss'
export default function Footer() {
    const formDetails = localStorage.getItem('formDetails');


    const MailContact = () => (
        <a href={`mailto:${contentConstants.FOOTER_MAIL}`}>{contentConstants.FOOTER_MAIL}</a>	
    )
    const WhatsappContact = () => (
        <a href={contentConstants.FOOTER_WHATSAPP_LINK}>
            <i className="fa fa-whatsapp" aria-label="WhatsApp" />
            {contentConstants.FOOTER_NUMBER}
        </a>
    )
    const PhoneContact = () => (
        <a href={`TEL:${contentConstants.FOOTER_NUMBER}`}>
          <i className="fa fa-phone" aria-label="Phone" />
            {contentConstants.FOOTER_NUMBER} 
        </a>
    )
    return (
        <footer>
           <p>{contentConstants.FOOTER_CONTACT_TITLE}</p>
            <MailContact />
           
            <span>
                <WhatsappContact />
                <PhoneContact />
            </span>

            <strong>Or fill this form:</strong>
            {formDetails ?  <p className="footer-submitted">
                {contentConstants.FORM_SUBMITTED_TEXT}</p> : <Form />
           }
        </footer>
    )
}
