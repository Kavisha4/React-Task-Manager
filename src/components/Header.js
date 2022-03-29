import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button" 
import { FaTimes } from 'react-icons/fa'


const Header = ({title,onAdd}) => {
 
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add' onClick={onAdd}/>
            </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  
export default Header
