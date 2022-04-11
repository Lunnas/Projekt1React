import React from "react";

function Offer() {
  const offers = [
    { num: 1, isNew: 1 },
    { num: 2, isNew: 0 },
    { num: 3, isNew: 0 },
    { num: 4, isNew: 0 },
    { num: 5, isNew: 0 },
    { num: 6, isNew: 0 },
  ];

  return offers.map((item) =>
    item.isNew == 1 ? (
      <div class="box">
        <div class="circle"></div>
        {"Usługa " + item.num + " (nowość!)"}
      </div>
    ) : (
      <div class="box">{"Usługa " + item.num}</div>
    )
  );
}

export default Offer;
