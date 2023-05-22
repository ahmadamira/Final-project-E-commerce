import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home-page/Home";
import Cardcom from "./Components/Card-com/Card";
import Abouthero from "./Components/Aboutpage/Abouthero/Abouthero";
import Aboutcard from "./Components/Aboutpage/Aboutcard/Aboutcard";
import Foundercard from "./Components/Aboutpage/Foundercard/Foundercard";
import Testimcard from "./Components/Aboutpage/Testimocard/Testimocard";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import ContactForm from "./Components/Contactuspage/Contactuspage";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
