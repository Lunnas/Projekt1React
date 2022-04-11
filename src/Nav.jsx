import React from "react";

function Nav() {
  return (
    <nav class="nav">
      <div class="wrapper">
        <div class="wrapperNav">
          <ul class="logo">
            <p>Logo</p>
          </ul>
          <ul class="links">
            <a href="#name" class="link">
              o nas
            </a>
            <a href="#offer" class="link">
              oferta
            </a>
            <p class="link-contact">kontkat</p>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
