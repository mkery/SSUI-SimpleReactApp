import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouted from './AppRouted';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouted />, document.getElementById('root'));
registerServiceWorker();
