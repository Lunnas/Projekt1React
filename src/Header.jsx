import React from "react";

function Header() {
  return (
    <header class="header">
      <div class="shadow-header"></div>
      <div class="wrapperHead">
        <h1 class="N1">Witam Cię na mojej stronie!</h1>
        <h2 class="N2">
          Tutaj przeczytasz parę słów o mnie i poznasz moje małe dzieła ;){" "}
        </h2>
        <a href="#offer" class="buttonHeader">
          Maskotki
        </a>
        <a href="#graf" class="buttonHeader">
          Grafika3D
        </a>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
