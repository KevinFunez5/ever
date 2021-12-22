import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>SinceForever Flooring</h1>
        <h3>Wilmington NC</h3>
        <Typed
          className="typed-text"
          strings={["Laminate", "Hardwood", "Carpet", "Tile"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Schedule Qoute</a>
      </div>
    </div>
  )
}

export default Header;