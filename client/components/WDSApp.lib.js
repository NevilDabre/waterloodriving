import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required')

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const phone = value =>
  value && !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value)
    ? 'Invalid Phone number'
    : undefined

const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined


const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span className="text-warning">{warning}</span>))}
  </div>
)

function showMessage(message) {
  var x = document.getElementById("snackbar")
  x.className = "show";
  x.innerText = message;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function submit(values) {
  var url = !values.fname ? '/freeGuide': values.message ? '/contact': '/registration';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(function (response) {
    console.log(response.status);
    if (response.status == 200) {
      showMessage('Your information submitted successfully');
    }
  }).catch(function (err) {
    console.log(err);
  });
}

export { required, email, renderField, sleep, phone, phoneNumber, submit }