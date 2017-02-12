import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';

const App = () => (
  <div className="container">
    <h1>Hello World</h1>    
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
