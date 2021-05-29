import React, {useState} from 'react'
import {Validators} from '../../../../library/utilities/Validators';

import optionsData from '../../../../resources/seed/countries.json'
export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState(optionsData[0]);
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});

    

    const calculateErrors = () => {
        let errorObj = {};

        let emailError = {...Validators.email(email, 'Invalid Email'), ...Validators.required(email, 'Please add an Email')};
        let nameError =   {...Validators.name(name, 'Invalid Name'), ...Validators.required(name, 'Please add a Name')};
        let messageError = Validators.required(message, 'Please add a Valid Message');

        console.log(emailError)
        console.log(nameError)
        console.log(messageError)
        if (emailError && emailError.error){
            errorObj['email'] = emailError.message
        }
        if (nameError && nameError.error){
            errorObj['name'] = nameError.message
        }
        if (messageError &&messageError.error){
            errorObj['message'] = messageError.message
        }
        
        return errorObj;
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let errorObj = calculateErrors();
        console.log(errorObj);

        if(Object.keys(errorObj).length === 0){
            localStorage.setItem('formDetails', JSON.stringify({
                name,
                email,
                country,
                message
                }));
            document.cookie=`name=${name}`;
            document.cookie=`country=${country}`;
            alert('Form has been submitted successfully! Thank you');
        }
        else setErrors(errorObj)
       
        
    }
    return (
        <form name="contactForm" id="contactForm">
            <legend>Personal Details:</legend>

            <label htmlFor="name" id="nameLabel" >Name</label>
            <input name="name" className={errors['name'] ? 'error-form-input' : 'form-input'} type="text" id="name" placeholder="Enter Your Name"
                onChange={(e) => {  
                    setErrors({});
                    setName(e.target.value)
                }} aria-labelledby="nameLabel"/>
            {errors['name'] ? <p className="error-message">{errors['name']}</p> : null}

            <label htmlFor="email" id="emailLabel">Email</label>
            <input type="email" id="email" 
                className={errors['email'] ? 'error-form-input' : 'form-input'} 
                name="email"
                onChange={(e) => {
                setErrors({});
                setEmail(e.target.value)}}
                placeholder="Enter Email" 
                aria-labelledby="emailLabel"/>
             {errors['email'] ? <p className="error-message">{errors['email']}</p> : null}

            <label htmlFor="country">Country</label>
            <select id="country" onSelect={(e) => {
                    setErrors({});
                    setCountry(e.target.value)}} 
                name="country"
                value={country}>
                {optionsData.map((item, index) => (<option value={item.value}>{item.label}</option>))}
            </select>

            <label htmlFor="message" id="messageLabel">Message</label>
            <textarea rows="4" columns="50" 
                name="message" id="message"
                className={errors['message'] ? 'error-form-input' : 'form-input'}
                onChange={(e) => {
                    setErrors({});
                    setMessage(e.target.value)}}
                aria-labelledby="messageLabel"
                placeholder="Enter the message you have">
            </textarea>
            {errors['message'] ? <p className="error-message">{errors['message']}</p> : null}

            <button type="submit" aria-label="Submit Form" onClick={onFormSubmit}>Submit Details</button>
        </form>
    )
}
