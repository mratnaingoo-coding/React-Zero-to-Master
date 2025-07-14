import React from 'react'
import General from '../card/General.jsx'
import './GeneralList.style.css'

const GeneralList = ({ monsters }) => {
  return (
    <div className='general-list-container'>
      {monsters.map(({ name, email, id }, index) => (
        <General
          key={index}
          name={name}
          email={email}
          id={id}
        />
      ))}
    </div>
  )
}

export default GeneralList