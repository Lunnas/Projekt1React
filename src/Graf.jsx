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
        <a
          href="https://www.artstation.com/artwork/Wm2RdD"
          onclick="window.open('okno-graf', 'okno-graf')"
          class="link-graf">
          <div class="circle"></div>
          <div class="background"></div>
          {"Jabłka " /*+ item.num*/ + " (nowość!)"}
        </a>
      </div>
    ) : (
      <>
        <div class="graf2">
          <a
            href="https://www.artstation.com/artwork/4XobQn"
            onclick="window.open('okno-garf', 'okno-graf')"
            class="link-graf">
            <div class="background"></div>
            {"miecz " /*+ item.num*/}
          </a>
        </div>
        <div class="graf3">
          <a
            href="https://www.artstation.com/artwork/eaGd86"
            onclick="window.open('okno-graf', 'okno-graf')"
            class="link-graf">
            <div class="background"></div>
            {"Pączek "}
          </a>
        </div>
      </>
    )
  );
}

export default Graf;
