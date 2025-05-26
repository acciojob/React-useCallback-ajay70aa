import React, { useState } from 'react'
import SkillList from './SkillList'

const UseCallbackComp = () => {
  const [inputValue, setInputValue] = useState("")
  const [skillList, setSkillList] = useState(["HTML", "CSS", "JavaScript", "React"])
  function handleInputChange(e){
    setInputValue(e.target.value)
  }
  function handleAddSkill(){
    setSkillList([...skillList, inputValue])
    setInputValue("")
  }
  function handleSkillDelete(value){
    const filteredSkills = skillList.filter(skill => skill !== value)
    setSkillList(filteredSkills)
  }
  return (
    <div className='main-container'>
      <input 
        type='text' 
        placeholder='Enter skill'
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        id='inputValue'
      />
      <button onClick={handleAddSkill} id='addBtn'>Add Skill</button>
      <SkillList skills={skillList} onDelete={handleSkillDelete}/>
    </div>
  )
}

export default UseCallbackComp