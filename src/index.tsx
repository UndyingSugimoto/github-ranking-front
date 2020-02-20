import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getUser } from './external/GetUser';


ReactDOM.render(<App />, document.getElementById('root'));


getUser('WataruShimomura')

