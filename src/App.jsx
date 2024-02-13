import { useState } from "react";
import Header from "./Components/Header";
import CoreConcepts from "./Components/CoreConcepts";
import Examples from "./Components/Examples";


import './index.css'


function App() {

  return (
    <div>
     <Header/>
      <main>
      <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
