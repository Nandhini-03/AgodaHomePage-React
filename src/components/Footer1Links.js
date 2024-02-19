import React from 'react'

function Footer1Links(props) {
  return (
    <li className="Links-list">
        <a href="#" className="list-footer">
            <p className="para-style">{props.data}</p>
        </a>
    </li>
  )
}

export default Footer1Links
