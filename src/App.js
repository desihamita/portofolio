import Navbar from "./components/navbar/Navbar";
import './App.css'
import Header from "./components/intro/Header";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
      style={{
        background: darkMode? 'black': '',
        color: darkMode? 'white': ''
      }}
    >
      <Navbar/>
      <Header/>
      <Services/>
      <Experience/>
      <Works/>
      <Portofolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


