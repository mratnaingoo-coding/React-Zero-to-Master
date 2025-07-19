import './App.css';
import { useState, useEffect } from 'react';
import Person from './card/Person';
import InputType from './input/InputType';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
      
  useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
              .then(response => response.json())
              .then((data) => {
                console.log(data);
                setPosts(data);
                setSearchTerm(data);
      });
       
      }, []);
  
  const handleSearch = (event) => {
    const searchItem = event.target.value.toLowerCase();
    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchItem) 
    );
    setSearchTerm(filteredPosts);
  };

  return (
    <div className="app-container">
      <h1>Posts</h1>
      <InputType InputHandler={handleSearch} />

      {searchTerm.map(({ title, body }, index) => (
        <Person key={index} title={title} body={body} />
      ))}
    </div>
  );
}

export default App;
