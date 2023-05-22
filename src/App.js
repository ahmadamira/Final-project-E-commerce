import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home-page/Home";
import Cardcom from "./Components/Card-com/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
