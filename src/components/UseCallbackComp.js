import React, { useCallback, useState } from 'react'
import SkillList from './SkillList'

const UseCallbackComp = () => {
  const [inputValue, setInputValue] = useState("")
  const [skillList, setSkillList] = useState(["HTML", "CSS", "JavaScript", "React"])
  function handleInputChange(e){
    setInputValue(e.target.value)
  }
  const handleAddSkill = useCallback((e) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();
    if (trimmedInput === "" || skillList.includes(trimmedInput)) return;
    setSkillList(prevSkills => [...prevSkills, trimmedInput]);
    setInputValue("");
  }, [inputValue, skillList]);

  const handleSkillDelete = useCallback((value) => {
    setSkillList(prevSkills => prevSkills.filter(skill => skill !== value));
  }, []);
  return (
    <div className='main-container'>
      <form onSubmit={(e) => handleAddSkill(e)}>
        <input 
          type='text' 
          placeholder='Enter skill'
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          id='skill-input'
        />
        <button type='submit' id='skill-add-btn'>Add Skill</button>
      </form>
      <SkillList skills={skillList} onDelete={handleSkillDelete}/>
    </div>
  )
}

export default UseCallbackComp