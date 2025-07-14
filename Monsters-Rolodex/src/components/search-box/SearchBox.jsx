import React from 'react'
import './SearchBox.style.css';

const SearchBox = ({onChangeHandle}) => {
  return (
    <input type="search" className='searchbox-container' onChange={onChangeHandle} />
  )
}

export default SearchBox;