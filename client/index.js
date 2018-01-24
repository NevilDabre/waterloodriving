import React from 'react';
import ReactDOM from 'react-dom';
import WDSApp from './components/WDSApp';
import FreeGuideForm from './components/freeGuideForm';
import store from './components/store';

ReactDOM.render(<WDSApp />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><FreeGuideForm /></Provider>, document.getElementById('freeGuideForm'));
