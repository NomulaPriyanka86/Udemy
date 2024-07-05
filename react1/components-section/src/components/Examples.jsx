import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';
import Section from './Section';
export default function Examples(){
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
    return(
        <Section id="examples" title={Examples} >
        <menu>
          <TabButton onClick={()=>handleSelect('components')} isSelected={selectContent==='components'}>Components</TabButton>
          <TabButton onClick={()=>handleSelect('jsx')} isSelected={selectContent==='jsx'}>Jsx</TabButton>
          <TabButton onClick={()=>handleSelect('props')} isSelected={selectContent==='props'}>Props</TabButton>
          <TabButton onClick={()=>handleSelect('state')} isSelected={selectContent==='state'}>State</TabButton>
        </menu>
      {tabContent}
       </Section>
    );
}