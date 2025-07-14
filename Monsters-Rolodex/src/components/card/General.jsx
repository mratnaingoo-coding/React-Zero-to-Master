import {React, useState} from 'react'
import './General.style.css'; // Assuming you have a CSS file for styles

const General = ({name, email, id}) => {
    const [bgColor, setBgColor] = useState('lightblue')
    const backGround = () => {
        const colors = [bgColor, 'lightgreen', 'coral', '#808d49', 'pink']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        setBgColor(randomColor);
        console.log(randomColor);
    }
    const [borderColor, setBorderColor] = useState('red');
    const changeBorder = () => {
        const borderColors = [borderColor, 'blue', 'green', 'yellow', 'purple'];
        const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
        console.log(randomBorderColor);
        setBorderColor(randomBorderColor);
    }
  return (
    <div>
        <div style={{
          backgroundColor: bgColor,
          border: `5px solid ${borderColor}`
        }}
        
        className='card-container'>
          <img 
          style={{
            width: '120px',
            height:'120px',
          }}
          src={`https://robohash.org/${id}?set=set2`} alt="profile" />
          <h3 >Name: {name}</h3>
          <p >Email: {email}</p>
          <button onClick={backGround}>Background Color</button>
          <button onClick={changeBorder} style={{marginLeft: '10px'}}>Border Color</button>
        </div>
      </div>
  )
}

export default General