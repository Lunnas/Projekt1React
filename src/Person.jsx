import React from "react";

function Person() {
  return (
    <section id="name" class="person">
      <h1 class="title">Parę słów o mnie</h1>
      <div class="wrapperPer">
        <article class="art">
          <div class="foto1"></div>
          <div class="about">
            <h2 class="name">Hej nazywam się Ewa Pruszyńska</h2>
            <p class="discrip">
              Skończyłam studia inżynierskie z Fizyki Technicznej. Cały czas
              rozwijam się w branży IT. Obecnie skończyłam bootcamp z Frontend
              Developper. Poza programowaniem moją pasją jest sztuka. Stawiam
              pierwsze kroki w grafice 3D. W wolnym czasie szyje artystyczne
              maskotki, gram w gry zarówno te komputerowe jak planszowe czy
              sesje RPG. Poniżej prezentuje parę z moich prac ;)
            </p>
          </div>
        </article>
        <article class="art2">
          <div class="foto2"></div>
          <div class="about">
            <h2 class="name2">Prywatnie</h2>
            <p class="discrip2">
              Prywatnie jestem żoną i mamą dwójki maluszków ;) Uwielbiam też
              koty. Obecnie mam dwa: Dobby (Devon Rex) i Lunna (Bengalski)
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Person;
