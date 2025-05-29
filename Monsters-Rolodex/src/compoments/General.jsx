import {React, useState} from 'react'

const General = ({name, title, pfimage}) => {
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
          padding: '15px',
          borderRadius: '10px',
          textAlign: 'center',
          margin: '20px auto',
          width: '300px',
          border: `5px solid ${borderColor}`,
        }}>
          <img 
          style={{
            width: '120px',
            height:'120px',
            border: '1px solid black',
            borderRadius: '5%',
          }}
          src={pfimage} alt="profile" />
          <h1 >Name: {name}</h1>
          <h3 >Title: {title}</h3>
          <button onClick={backGround}>Background Color</button>
          <button onClick={changeBorder} style={{marginLeft: '10px'}}>Border Color</button>
        </div>
      </div>
  )
}

export default General