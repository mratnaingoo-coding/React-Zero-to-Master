import { React } from 'react'
import General from '../src/compoments/General.jsx'

const App = () => {
  const persons = [
    { name: 'Mg Mg', title: 'Backend Developer', img:'https://4kwallpapers.com/images/walls/thumbs_3t/22404.jpg' },
    { name: 'Mg Kyaw', title: 'Python Developer', img:'https://cdn.pixabay.com/photo/2025/05/16/16/14/investigation-9604083_1280.png'},
    { name: 'Mg Soe', title: 'React Developer', img:'https://cdn.pixabay.com/photo/2025/04/15/08/11/man-9534903_640.jpg' },
    { name: 'Mg Hla', title: 'System Engineer', img:'https://cdn.pixabay.com/photo/2025/04/28/15/52/travel-9565325_1280.png ' },
    
  ]
  return (
    <>
        <code>My App</code>
        <div style={{
          display: 'grid',
          gap: '10px 10px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        }}>
          {persons.map((person, index) => (
            <General key={index} name={person.name} title={person.title} pfimage={person.img}/>
          ))}
        </div>
        
    </>
  )
}

export default App
