import { useState } from "react";
import Header from "./Components/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/Tabbutton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";


import './index.css'


function App() {
  const [selectedTopic,setSelectdtopic]=useState(null)
  function handleClick(name){
    setSelectdtopic(name)
  }
  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((con)=><CoreConcept key={con.title} {...con}/>)}
        </ul></section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic==='components'} onClick={()=>handleClick('components')}>component</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'}  onClick={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'}  onClick={()=>handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'}  onClick={()=>handleClick('state')}>State</TabButton></menu>
          {!selectedTopic && <p>please select a heading</p>}

          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div>}
        
        </section>
      </main>
    </div>
  );
}

export default App;
