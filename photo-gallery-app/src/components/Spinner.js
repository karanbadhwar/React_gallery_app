import React from 'react';
import loading from '../images/loading.gif';

export default function Spinner() {
  return (
    <div>
        <img src={loading} alt="Loading..."/>
    </div>
  )
}
