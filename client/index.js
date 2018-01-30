/*import React from 'react';
import ReactDOM from 'react-dom';
import WDSApp from './components/WDSApp';
import FreeGuideForm from './components/freeGuideForm';
import store from './components/store';

ReactDOM.render(<WDSApp />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><FreeGuideForm /></Provider>, document.getElementById('freeGuideForm'));*/


import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './components/store.js';
import FreeGuideForm from './components/freeGuideForm';
import ContactForm from './components/contactForm';
import RegistrationForm from './components/registrationForm';

class FreeGuideApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <FreeGuideForm />
      </Provider>
    );
  }
}

class ContactFormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ContactForm />
      </Provider>
    );
  }
}

class RegistrationFormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RegistrationForm />
      </Provider>
    );
  }
}

ReactDOM.render(<FreeGuideApp />, document.getElementById('freeGuideFormContainer'));
ReactDOM.render(<ContactFormApp />, document.getElementById('contactUsFormContainer'));
ReactDOM.render(<RegistrationFormApp />, document.getElementById('registrationContainer'));