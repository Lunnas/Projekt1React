import React from "react";

function Nav() {
  return (
    <nav class="nav">
      <div class="wrapper">
        <div class="wrapperNav">
          <ul class="logo">
            <p>DreemDolls</p>
          </ul>
          <ul class="links">
            <a href="#name" class="link">
              o mnie
            </a>
            <a href="#offer" class="link">
              Maskotki
            </a>
            <a href="#graf" class="link">
              Grafika 3D
            </a>
            <p class="link-contact">kontkat</p>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
