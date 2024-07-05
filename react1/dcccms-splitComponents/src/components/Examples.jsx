import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';
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
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('components')} isSelected={selectContent==='components'}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')} isSelected={selectContent==='jsx'}>Jsx</TabButton>
          <TabButton onSelect={()=>handleSelect('props')} isSelected={selectContent==='props'}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')} isSelected={selectContent==='state'}>State</TabButton>
        </menu>
      {tabContent}
       </section>
    );
}