import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div class="single-input color-2 mb-10">
        <Field type="text" component="input" name="fname" placeholder="Full Name" onfocus="this.placeholder = ''" onBlur="this.placeholder = 'Full Name'" />
      </div>
      <div class="single-input color-2 mb-10">
        <Field type="email" component="input" name="email" placeholder="Email Address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          onfocus="this.placeholder = ''" onBlur="this.placeholder = 'Email Address'" />
      </div>
      <div class="single-input color-2 mb-10">
        <Field type="text" component="input" name="phone" placeholder="Phone Number" pattern="\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*" onfocus="this.placeholder = ''"
          onBlur="this.placeholder = 'Phone Number'" />
      </div>
      <div class="single-input color-2 mb-10">
        <Field type="text" component="input" name="drivingLicenseNumber" placeholder="Driving License Number" onfocus="this.placeholder = ''"
          onBlur="this.placeholder = 'Driving License Number'" />
      </div>
      <div class="single-input color-2 mb-10">
        <Field type="text" component="input" name="expiryDate" placeholder="Expiry Date" onfocus="this.placeholder = ''"
          onBlur="this.placeholder = 'Expiry Date'" />
      </div>
      <div class="single-input color-2 mb-10 pull-right">
        <button type="button" class="primary-btn d-inline-flex text-uppercase align-items-center" data-dismiss="modal">Submit</button>
        <button type="button" class="primary-btn d-inline-flex text-uppercase align-items-center" data-dismiss="modal">Close</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'registrationForm', // a unique identifier for this form
})(RegistrationForm);