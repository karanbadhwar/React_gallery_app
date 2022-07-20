import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Error404() {
  return (
    <div>
        <h1>404</h1>
        <h2>Bummer!! </h2>
        <h3>Page Not Found!!</h3>
    <Link to="/" className='backHome'>Back</Link>
    </div>
  )
}
