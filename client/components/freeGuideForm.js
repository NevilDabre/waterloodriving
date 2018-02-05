import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email, renderField, sleep, submit } from './WDSApp.lib';

const FreeGuideForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)} className="subscription relative d-flex justify-content-center">
      <div>
        <Field name="email"
          component={renderField}
          type="email"
          placeholder="Email"
          validate={[required, email]} />
        <button type="submit" className="newsletter-btn" name="subscribe">
          <span className="lnr lnr-location"></span>
        </button>
        <div className="info"></div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'freeGuideForm', // a unique identifier for this form
})(FreeGuideForm);
