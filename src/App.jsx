import { useStage } from "react";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Person from "./Person";
import Services from "./Services";
import Graphics from "./Graphics";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Person></Person>
      <Services></Services>
      <Graphics></Graphics>
      <Footer></Footer>
    </div>
  );
}
export default App;
