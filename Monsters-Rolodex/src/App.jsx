import { React, useEffect, useState } from 'react'
import GeneralList from './components/card-list/GeneralList.jsx';
import SearchBox from './components/search-box/SearchBox.jsx';
import './App.css';

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

  const onSearchHandle = (event) =>  {
          const searchString = event.target.value.toLowerCase();
          const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchString)
          );
          setSearchMonsters(filteredMonsters);
        };
      
  return (
    <div className='app-container'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandle={onSearchHandle} />
      <GeneralList monsters={searchMonsters} />
    </div>
  )
}

export default App
