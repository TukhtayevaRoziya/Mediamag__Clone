import "./App.css";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";

function App() {
  return <div className="App">
    <MiniHeader/>
    <Header />
    <Catalog/>
    <About />
    <Payment />
    <Footer />
  </div>;
}

export default App;
