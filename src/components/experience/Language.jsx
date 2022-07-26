import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = ({skill,exp}) => {
  return (
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
      <h4>{skill}</h4>
      <small className='text-light'>{exp}</small>
    </div>

  </article>
  )
}

export default Skills