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

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <FreeGuideForm />

      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('freeGuideFormContainer'));
