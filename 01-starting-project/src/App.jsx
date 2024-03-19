import { useState,Fragment } from 'react';

import componentsImg from './assets/components.png';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header/Header.jsx';



function App() {
  
  
  console.log('APP COMPONENT EXECUTING')

  return (
    <>
      
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
          
      </main>
    </>
  );
}

export default App;
