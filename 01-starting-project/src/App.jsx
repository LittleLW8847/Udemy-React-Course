import { useState,Fragment } from 'react';

import componentsImg from './assets/components.png';
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';

import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data.js'


function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  let tabContent = <p>please select a topic</p>;

  if(selectedTopic){
    tabContent = <div id = "tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

  function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
}
  
  console.log('APP COMPONENT EXECUTING')

  return (
    <>
      
      <Header />
      <main>
        <CoreConcepts/>
        <section id = "examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')} isSelect={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')} isSelect={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')} isSelect={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')} isSelect={selectedTopic === 'state'}>States</TabButton>
          </menu>
          {tabContent} {/* alternative 3 */}
          
          {/*{!selectedTopic && <p>please select a topic</p>}   alternative 2
          {selectedTopic? 
          <div id = "tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
          </div>:null}*/}

          {/*{!selectedTopic? <p>please select a topic</p>:
          <div id = "tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
          </div>*/ }
          
        </section>
      </main>
    </>
  );
}

export default App;
