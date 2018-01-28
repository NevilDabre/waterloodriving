import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} class="subscription relative d-flex justify-content-center">
      <div>
        <Field name="email"
          component="input"
          type="email"
          placeholder="Email" />
        <button type="submit" class="newsletter-btn" name="subscribe">
          <span class="lnr lnr-location"></span>
        </button>
        <div class="info"></div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'contactForm', // a unique identifier for this form
})(ContactForm);