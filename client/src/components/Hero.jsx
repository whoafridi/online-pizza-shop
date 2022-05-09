import React from "react";

function Hero() {
  return (
    <div className="home" style={{ backgroundImage: `url(https://raw.githubusercontent.com/machadop1407/react-website-tutorial/main/src/assets/pizza.jpeg)`}}>
      <div className="headerContainer">
        <h1>Online Pizza Shop </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
          <button> ORDER NOW </button>
      </div>
    </div>
  );
}

export default Hero;