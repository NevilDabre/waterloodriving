import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email, renderField, sleep, phoneNumber } from './WDSApp.lib';
import DatePicker from 'react-datepicker';
import moment from 'moment';

function submit(values) {
  return sleep(1000).then(() => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  })
}

const RegistrationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="single-input color-2 mb-10">
        <Field type="text"
          component={renderField}
          name="fname"
          placeholder="Full Name"
          validate={required} />
      </div>
      <div className="single-input color-2 mb-10">
        <Field type="email"
          component={renderField}
          name="email"
          placeholder="Email Address"
          validate={[required, email]} />
      </div>
      <div className="single-input color-2 mb-10">
        <Field type="text"
          component={renderField}
          name="phone"
          placeholder="Phone Number"
          validate={[required, phoneNumber]} />
      </div>
      <div className="single-input color-2 mb-10">
        <Field type="text"
          component={renderField}
          name="drivingLicenseNumber"
          placeholder="Driving License Number" />
      </div>
      <div className="single-input color-2 mb-10">
        <DatePicker name="expiryDate"/>
      </div>
      <div className="single-input color-2 mb-10 pull-right">
        <button type="submit" className="primary-btn d-inline-flex text-uppercase align-items-center">Submit</button>
        <button type="button" className="primary-btn d-inline-flex text-uppercase align-items-center">Close</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'registrationForm', // a unique identifier for this form
})(RegistrationForm);