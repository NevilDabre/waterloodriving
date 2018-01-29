import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} class="contact-form">
    <div class="single-input color-2 mb-10">
      <Field type="text" component="input" name="fname" placeholder="Full Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" />
    </div>
    <div class="single-input color-2 mb-10">
      <Field type="email" component="input" name="email" placeholder="Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
       onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'" />
    </div>
    <div class="single-input color-2 mb-10">
      <Field type="text" component="input" name="phone" placeholder="Phone Number" pattern="\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*" onfocus="this.placeholder = ''"
       onblur="this.placeholder = 'Phone Number'" />
    </div>
    <div class="single-input color-2 mb-10">
      <textarea name="message" placeholder="Type your message here..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Type your message here...'"
       required></textarea>
    </div>
    <div class="d-flex justify-content-end">
      <button class="mt-10 primary-btn d-inline-flex text-uppercase align-items-center">Send Message
        <span class="lnr lnr-arrow-right"></span>
      </button>
    </div>
    <div class="alert"></div>
  </form>
  );
};

export default reduxForm({
  form: 'contactForm', // a unique identifier for this form
})(ContactForm);