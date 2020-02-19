import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getUser } from './grapql/GetUser';


ReactDOM.render(<App />, document.getElementById('root'));


console.log(getUser('WataruShimomura'))

