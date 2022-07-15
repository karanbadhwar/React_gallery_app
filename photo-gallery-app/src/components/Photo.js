import React from 'react'

export default function Photo(props) {
  return (
    <li className='photo'>
        <img src={`https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secretId}_${props.suffix}.jpg`} alt="Flickr" />
    </li>
  );
}
