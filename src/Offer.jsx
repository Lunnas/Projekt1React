import React from "react";

function Offer() {
  const offers = [
    { num: 1, isNew: 1 },
    { num: 2, isNew: 0 },
    /*{ num: 3, isNew: 0 },
    { num: 4, isNew: 0 },
    { num: 5, isNew: 0 },
    { num: 6, isNew: 0 },*/
  ];
  return offers.map((item) =>
    item.isNew == 1 ? (
      <div class="box1">
        <div class="circle"></div>
        {"Sarenka " /*+ item.num*/ + " (nowość!)"}
      </div>
    ) : (
      /*<div class="wrapperServices">
      <div class="box1">
        <div class="box-inside-new"></div>
        <h2 class="name">Usługa 1 (nowość)</h2>
      </div>*/
      <>
        <div class="box2">{"Wilk " /*+ item.num*/}</div>
        <div class="box3">{"Pies " /*+ item.num*/}</div>
        <div class="box4">{"króliczki " /*+ item.num*/}</div>
        <div class="box5">{"Tilda Różowa " /*+ item.num*/}</div>
        <div class="box6">{"Tilda " /*+ item.num*/}</div>
      </>
    )
  );
}

/* <div class="box2">
        <h2 class="name">Usługa 2</h2>
      </div>
      <div class="box3">
        <h2 class="name">Usługa 3</h2>
      </div>
      <div class="box4">
        <h2 class="name">Usługa 4</h2>
      </div>
      <div class="box5">
        <h2 class="name">Usługa 5</h2>
      </div>
      <div class="box6">
        <h2 class="name">Usługa 6</h2>
      </div>
    </div>
  );
      }*/

/* const offers = [
    { num: 1, isNew: 1 },
    { num: 2, isNew: 0 },
    { num: 3, isNew: 0 },
    { num: 4, isNew: 0 },
    { num: 5, isNew: 0 },
    { num: 6, isNew: 0 },
  ];*/

/* return offers.map((item) =>
    item.isNew == 1 ? (
      <div class="box">
        <div class="circle"></div>
        {"Maskotka " + item.num + " (nowość!)"}
      </div>
    ) : (
      <div class="box">{"Maskotka " + item.num}</div>
    )
  );
}*/

export default Offer;
