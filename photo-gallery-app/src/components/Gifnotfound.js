import React from 'react';
import error from '../images/error.jpg'

export default function Gifnotfound() {
  return (
    <div>
        <h3>No results Found</h3>
        <img src={error} alt="Not Found"/>
    </div>
  )
}
