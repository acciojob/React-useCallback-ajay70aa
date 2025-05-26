import React from 'react'

const SkillList = ({skills, onDelete}) => {
  return (
    <div className='skills-container'>
      <ul>
        {skills.map((skill, index) => {
          return (
            <li key={index} id={`skill-number-${index}`}>
              {skill} <button onClick={() => onDelete(skill)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillList