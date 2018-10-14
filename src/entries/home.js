import React from 'react'
import { render } from "react-dom";
import Home from '../pages/containers/home';
// import Playlist from '../playlist/components/playlist';
import data from '../api.json';
import { createStore } from 'redux';

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());

const homeContainer = document.getElementById('home-container');

render(<Home data={data} />, homeContainer);

