import React from "react";
import './Header.css'
 
function Header() {
  return (
    <header className="header">
 
      <div className="logoSection">
        <div className="logo">S</div>
        <span className="brand">SecureShield</span>
      </div>
 
      <div className="headerRight">
        <span className="help">Help</span>
        <div className="profile">VD</div>
      </div>
 
    </header>
  );
}
 
export default Header;