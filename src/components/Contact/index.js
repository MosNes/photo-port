import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    //-------------------STATE VARIABLES------------------------------------------------------

    //sets initial default state of input fields to empty values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //Sets error message as empty string by default
    const [errorMessage, setErrorMessage] = useState('');

    //destructure formState into 3 variables
    const { name, email, message } = formState;

    //-------------------EVENT HANDLERS-------------------------------------------------------

    //create changeHandler to sync the values for the input fields to the current state
    function handleChange(e) {

        //validate input
        //if change comes from email field
        if (e.target.name === 'email'){
            //run email validation helper function
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //set error message content if email is invalid
            if (!isValid){
                setErrorMessage('Your Email is Invalid.');
            } else {
                setErrorMessage('');
            }
        //if change comes from other two fields
        } else {
            //if field is empty (length = 0)
            if (!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        //only update the state if the error message is empty
        if (!errorMessage){
        //use spread operator to retain all key-value pairs, otherwise formState would be overwritten to contain only the single key-value defined here
        // [e.target.name] dynamically generates the property name and matching value
        setFormState({ ...formState, [e.target.name]: e.target.value })
        
        }
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //----------COMPONENT-----------------------------------------------------------------

    return (
        <section>
            <h1>Contact Me</h1>
            {/* on submit needs to be added to the form element, not the submit button element */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {/* render errorMessage if not empty */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;