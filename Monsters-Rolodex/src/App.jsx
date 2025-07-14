import { React, useEffect, useState } from 'react'
import GeneralList from './components/card-list/GeneralList.jsx';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchMonsters, setSearchMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMonsters(data);
        setSearchMonsters(data);
      })

  }, []);

  return (
    <>
      <input type="search" onChange={
        (event) => {

          const searchString = event.target.value.toLowerCase();
          const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchString)
          );
          setSearchMonsters(filteredMonsters);


        }
      } />
      <GeneralList monsters={searchMonsters} />
    </>
  )
}

export default App
