import React from 'react'
import Media from './media'
import './playlist.css'


function Playlist(props) {
  // const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => {
          return <Media {...item} key={item.id} openModal={props.handleModalToggle} />
        })
      }
    </div>
  )
}

export default Playlist;