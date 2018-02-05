import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email, renderField, sleep, phoneNumber,submit } from './WDSApp.lib';

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)} className="contact-form">
    <div className="single-input color-2 mb-10">
      <Field name="fname"
            component={renderField}
            type="text"
            placeholder="Full Name"
            validate={required} />
    </div>
    <div className="single-input color-2 mb-10">
      <Field name="email"
            component={renderField}
            type="email"
            placeholder="Email Address"
            validate={[required, email]} />
    </div>
    <div className="single-input color-2 mb-10">
      <Field name="phone"
            type="number"
            component={renderField}
            placeholder="Phone Number"
            validate={[required,phoneNumber]} />
    </div>
    <div className="single-input color-2 mb-10">
      <Field name="message"
            component="textarea"
            placeholder="Type your message here..."
            validate={required} />
    </div>
    <div className="d-flex justify-content-end">
      <button type="submit" className="mt-10 primary-btn d-inline-flex text-uppercase align-items-center">Send Message
        <span className="lnr lnr-arrow-right"></span>
      </button>
    </div>
    <div className="alert"></div>
  </form>
  );
};

export default reduxForm({
  form: 'contactForm', // a unique identifier for this form
})(ContactForm);