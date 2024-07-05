
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data-with-examples'

function App() {
  const [selectContent,setSelectedContent]=useState();
  function handleSelect(selectedButton){
    //selectedButton components,Jsx,State,Props
    setSelectedContent(selectedButton);
    console.log(selectContent)
}
let tabContent=<p>Please select a topic</p>;
 if(selectContent){
  tabContent=( <div id="tab-content">
    <h3>{EXAMPLES[selectContent].title}</h3>
    <p>{EXAMPLES[selectContent].description}</p>
    <pre>
      <code>{EXAMPLES[selectContent].code}</code>
    </pre>
  </div>);
 }

  return (
    <div>
      <Header/>
      <main>
       <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
        </ul>
        {/* <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
        </ul> */}
       </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('components')} isSelected={selectContent==='components'}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')} isSelected={selectContent==='jsx'}>Jsx</TabButton>
          <TabButton onSelect={()=>handleSelect('props')} isSelected={selectContent==='props'}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')} isSelected={selectContent==='state'}>State</TabButton>
        </menu>
      {/* added styling for Tabbutton in the above      isSelected={selectContent==='components'} */}

        {/* 1 way */}
      {/* {selectContent} */}

      {/* 2 another way */}
      {/* {!selectContent?(<p>Please select a topic</p>): ( <div id="tab-content">
        <h3>{EXAMPLES[selectContent].title}</h3>
        <p>{EXAMPLES[selectContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectContent].code}</code>
        </pre>
      </div>)} */}

      {/* 3 another way */}
      {tabContent}

       </section>
      </main>
    </div>
  );
}

export default App;