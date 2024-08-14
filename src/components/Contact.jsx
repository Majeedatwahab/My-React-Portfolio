import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../components-css/Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("mayrjpkz");
  const [successMessage, setSuccessMessage] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setSuccessMessage("Thanks for contacting me, i will get back to you as soon as possible!!!!!.");
      // Clear form fields
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <section className="contact" id="contact">
      <h3 className="contact-header">
        Contact <span>Me</span>
      </h3>
      <p>Kindly fill the form to get in touch with me.</p>
      <div className="contact-container">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="yourname">Name</label>
          <input
            id="yourname"
            type="text"
            name="yourname"
            className="input-space"
            placeholder="Enter Your name"
            required
            ref={nameRef}
          />
          <ValidationError 
            prefix="Name" 
            field="yourname"
            errors={state.errors}
          />
          <br />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="input-space"
            placeholder="Enter your Email Address"
            required
            ref={emailRef}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols={60}
            rows={10}
            className="input-space"
            placeholder="Enter your message"
            required
            ref={messageRef}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="sub-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
