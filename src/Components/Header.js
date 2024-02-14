import React from 'react'
import {} from "@mui/material"
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'

function Header() {
  return <header>
    <img 
    src="https://firebasestorage.googleapis.com/v0/b/tornado-food.appspot.com/o/Logo-Tornado.png?alt=media&token=c8e68686-b306-48f1-b0d0-d683e5813043" 
    alt="" 
    className="logo"
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

    <div class="profileContainer">
      <div class="imgBox">
        <img src="https://firebasestorage.googleapis.com/v0/b/tornado-food.appspot.com/o/Brabos-do-Mequi-novos-lanches-mcdonalds.jpg?alt=media&token=c15fdac9-d0e7-4cf4-8d61-c0587938205c" 
        alt="" 
        class="profilePic"
        />
      </div>
            <h2 class="userName">TornadoFood</h2>
    </div>


    <div className="toggleMenu">
      <BarChart className="toggleIcon" />
    </div>
  </header>
}

export default Header