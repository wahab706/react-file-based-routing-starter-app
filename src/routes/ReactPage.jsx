import React from 'react'
import { Link } from 'react-router-dom';

export default function ReactPage() {
  return (
    <div>
      <h1>React Page</h1>
      <Link to='/'>Goto Home</Link>
    </div>
  )
}
