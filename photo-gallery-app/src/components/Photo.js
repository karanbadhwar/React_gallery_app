import React from 'react'

export default function Photo(props) {
  return (
    <li className='photo'>
       <a href={`https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secretId}_${props.suffix}.jpg`} target="_blank" rel='noreferrer'><img src={`https://live.staticflickr.com/${props.serverId}/${props.id}_${props.secretId}_${props.suffix}.jpg`} alt="Flickr"/> </a>
    </li>
  );
}

