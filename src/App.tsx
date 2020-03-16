import React from 'react';
import './App.css';
import Background from './map.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw'
}

function App() {
  return (
    <div style={sectionStyle}>
    </div>
  );
}

export default App;
