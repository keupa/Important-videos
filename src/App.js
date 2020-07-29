import React from 'react';
import './App.css';

import Links from './components/Links'
import LinkForm from './components/LinkForm'

function App() {
  return (
    <div className="container"> 
      <div className="row">
        <div className="col s12">
            <Links /> 
        </div>
      </div>
    </div>
  );
}

export default App;
