import React from 'react'
// import './styles.css'

function HeaderList(props) {
  return (
    <div className="title-content-links">
        <span className="header-content-style">{props.data}</span>
    </div>
  )
}

export default HeaderList
