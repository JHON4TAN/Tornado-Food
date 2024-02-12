import React from 'react'
import {} from "@mui/material"
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
  return <header>
    <img 
    src="" 
    alt="" 
    className=""
    />

    <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
    </div>

    <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
         <p>2 </p>
        </div>
    </div>

    <div classname="profileContainer">
        <div classname="imgBox">
            <img src="" alt="" />
        </div>

        <h2 classname="username">TornadoFood</h2>
    </div>

    <div className="toggleMenu">
      <BarChart className="toggleIcon" />
    </div>
  </header>
}

export default Header