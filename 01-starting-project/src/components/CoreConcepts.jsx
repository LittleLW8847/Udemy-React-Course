import CoreConcept from './CoreConcept/CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data.js';


export default function CoreConcepts(){
    return(
        
        <section id="core-concepts">
          <h2>core concept!</h2>
          <ul>
            {CORE_CONCEPTS.map((arrayItem) => <CoreConcept key={arrayItem.title} {...arrayItem}/>)}
            {/*<CoreConcept title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>

            <CoreConcept {...CORE_CONCEPTS[1]}/>

            <CoreConcept title={CORE_CONCEPTS[2].title} 
            description={CORE_CONCEPTS[2].description} 
            image={CORE_CONCEPTS[2].image} />

            <CoreConcept title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description} 
  image={CORE_CONCEPTS[3].image} />*/}
          </ul>
        </section>
    );
}