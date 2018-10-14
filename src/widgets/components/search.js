import React from 'react'
import './search.css'


const Search = (props) => (
  <form 
    className="Search"
    onSubmit={props.handleSubmit}>
    <input
      ref={props.setRef} 
      type="text" 
      className="Search-input" 
      name="search"
      onChange={props.handleChange}
      value={props.value}
      placeholder="Busca tu video favorito" 
      onSubmit={props.handleSubmit} />
  </form>
)

export default Search;