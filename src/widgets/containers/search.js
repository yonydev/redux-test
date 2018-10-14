import React, { Component } from 'react'
import Search from '../components/search';


class SearchContainer extends Component {

  state = {
    value: 'Holi Guaquimoli !'
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render() {
    return(
      <Search 
        handleSubmit={this.handleSubmit} 
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}/>
    )
  }
}

export default SearchContainer;