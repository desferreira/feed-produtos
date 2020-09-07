import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";


function Menu(props){
    return (
      <div>
        <span className="font-bold">This is the menu</span>
        <ul>
          <li>
            <Link to="/" onClick={() => props.setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => props.setShowMenu(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Menu;