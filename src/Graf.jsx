import React from "react";

function Graf() {
  const grafs = [
    { num: 1, isNew: 1 },
    { num: 2, isNew: 0 },
    /*{ num: 3, isNew: 0 },
    { num: 4, isNew: 0 },
    { num: 5, isNew: 0 },
    { num: 6, isNew: 0 },*/
  ];
  return grafs.map((item) =>
    item.isNew == 1 ? (
      <div class="graf1">
        <div class="circle"></div>
        <div class="background"></div>
        {"Jabłka " /*+ item.num*/ + " (nowość!)"}
      </div>
    ) : (
      <>
        <div class="graf2">
          <div class="background"></div>
          {"miecz " /*+ item.num*/}
        </div>
        <div class="graf3">
          <div class="background"></div>
          {"Pączek "}
        </div>
      </>
    )
  );
}

export default Graf;
