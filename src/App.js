import React from 'react';
import './App.css';

import Links from './components/Links'
import LinkForm from './components/LinkForm'

function App() {
  return (
    <div className="container"> 
      <div className="row">
        <div className="col s12">
          <h4 className="teal-text">Important links</h4>
          <h4 className="red-text">♡</h4>
            <Links /> 
        </div>
      </div>
    </div>
  );
}

export default App;
