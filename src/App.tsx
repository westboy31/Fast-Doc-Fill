import { useState } from 'react'
import Panel from './Components/Panel'
import TextZone from './Components/TextZone'
import './CSS/App.css'

function App() {
  return (
    <>
       <div id="base">
         <div id="left" className="left">
           <nav></nav>
           <Panel className="comp"></Panel>
         </div>
         <div id="right" className="right">
           <TextZone></TextZone>
         </div>
       </div>
   
    </>
  )
}

export default App