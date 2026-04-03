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
        <div className="bell">🔔</div>
        <div className="profile">JC</div>
      </div>
    </header>
  );
}
 
export default Header;