import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
function CoreConcepts(){
    return <section id="core-concepts">
    <h2>Core concepts</h2>
    <ul>
      {CORE_CONCEPTS.map((con)=><CoreConcept key={con.title} {...con}/>)}
    </ul></section>
}
export default CoreConcepts