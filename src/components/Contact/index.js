import React, {useState} from "react";

function ContactForm() {

    //sets initial default state of input fields to empty values
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    //destructure formState into 3 variables
    const { name, email, message } = formState;

    //create changeHandler to sync the values for the input fields to the current state
    function handleChange(e) {
        //use spread operator to retain all key-value pairs, otherwise formState would be overwritten to contain only the single key-value defined here
        // [e.target.name] dynamically generates the property name and matching value
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;