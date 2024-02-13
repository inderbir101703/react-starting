import { useState } from "react"
import TabButton from "./Tabbutton"
import Section from "./Section"
import Tabs from "./Tabs"
import { EXAMPLES } from "../data"

function Examples(){
    const [selectedTopic,setSelectdtopic]=useState(null)
    function handleClick(name){
      setSelectdtopic(name)
    }
    return <Section title="Examples" id='examples'>
      <Tabs 
      buttonsContainer="menu"
      buttons={<><TabButton isSelected={selectedTopic==='components'} onClick={()=>handleClick('components')}>component</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'}  onClick={()=>handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'}  onClick={()=>handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'}  onClick={()=>handleClick('state')}>State</TabButton></>}> {!selectedTopic && <p>please select a heading</p>}

          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div>}
        </Tabs>

          
         
          </Section>
}
export default Examples