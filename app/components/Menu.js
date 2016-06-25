import React, { PropTypes } from 'react'

export default function Menu (props) {
  return (
    <li className='card'>
      <button>{'All'}</button>
      <button className='btn btn-danger delete'>{'To Do'}</button>
      <button className='btn btn-info'>{'Completed'}</button>
    </li>
  )
}

Menu.propTypes = {
}