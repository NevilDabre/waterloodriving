const required = value => (value ? undefined : 'Required')
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FreeGuideForm = props => {
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
  form: 'freeGuideForm', // a unique identifier for this form
})(FreeGuideForm);
