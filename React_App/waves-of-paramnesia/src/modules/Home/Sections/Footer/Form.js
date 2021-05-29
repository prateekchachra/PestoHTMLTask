import React, {useState} from 'react'


import optionsData from '../../../../resources/seed/countries.json'
export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState(optionsData[0]);
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});

    
    const onFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formDetails', JSON.stringify({
            name,
            email,
            country,
            message
            }));
        document.cookie=`name=${name}`;
        document.cookie=`country=${country}`;
        alert('Form has been submitted successfully! Thank you')
        
    }
    return (
        <form name="contactForm" id="contactForm">
            <legend>Personal Details:</legend>
            <label htmlFor="name" id="nameLabel" >Name</label>
            <input name="name" type="text" id="name" placeholder="Enter Your Name"
            onChange={(e) => {  
                setErrors({});
                setName(e.target.value)
            }} aria-labelledby="nameLabel"/>
            
            <label htmlFor="email" id="emailLabel">Email</label>
            <input type="email" id="email" name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email" aria-labelledby="emailLabel"/>
            <label htmlFor="country">Country</label>

            <select id="country" onSelect={(e) => setCountry(e.target.value)} name="country"
            value={country}>
                {optionsData.map((item, index) => (<option value={item.value}>{item.label}</option>))}
            </select>
            <label htmlFor="message" id="messageLabel">Message</label>
            <textarea rows="4" columns="50" name="message" id="message"
            onChange={(e) => setMessage(e.target.value)}
            aria-labelledby="messageLabel"
            placeholder="Enter the message you have"></textarea>

            <button type="submit" aria-label="Submit Form" onClick={onFormSubmit}>Submit Details</button>
        </form>
    )
}
