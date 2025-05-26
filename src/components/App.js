import React from 'react'
import UseCallbackComp from './UseCallbackComp'
import SkillList from './SkillList'
import "../styles/App.css"

const App = () => {
  return (
    <div id='main'>
      <h1 id='heading'>Skills Section</h1>
      <UseCallbackComp />
    </div>
  )
}

export default App