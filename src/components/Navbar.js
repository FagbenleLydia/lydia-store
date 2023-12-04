import React from "react";

function Navbar () {
  return (
  <nav className ='navbar'>
  <h1> LYDSTORE</h1>
  <div className="links">
      <a href= '/'>Home</a>

      <a href= '/create'>New Store</a>
      
  </div>
  <div className="links">
     <a href= '/create'> Cart</a>
     <ion-icon name="cart-outline">
     </ion-icon>
  </div>
</nav>
);
};

export default Navbar;
