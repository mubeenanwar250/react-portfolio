import React, { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Productlist from "./components/productList/Productlist";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";






function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div style={{backgroundColor: darkMode ?"#222" : "white", color: darkMode && "white"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
        
        </div>
    </>
  );
}

export default App;
