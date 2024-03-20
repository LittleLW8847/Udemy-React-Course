import { useState} from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples(){

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

    return(
        <Section title="examples" id="examples">
            <Tabs buttons={
                <>
                    <TabButton onClick={()=>handleSelect('components')} isSelect={selectedTopic === 'components'}>Components</TabButton>
                    <TabButton onClick={()=>handleSelect('jsx')} isSelect={selectedTopic === 'jsx'}>JSX</TabButton>
                    <TabButton onClick={()=>handleSelect('props')} isSelect={selectedTopic === 'props'}>Props</TabButton>
                    <TabButton onClick={()=>handleSelect('state')} isSelect={selectedTopic === 'state'}>States</TabButton>
                </>
            } buttonContainer="menu">{tabContent}</Tabs>
          
          {/* alternative 3 */}
          
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
        </Section>
    );
}