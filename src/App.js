import "./App.css";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Discount from "./components/discount/Discount";

function App() {
  return <div className="App">
    <MiniHeader/>
    <Header />
    <Catalog/>
    <Discount/>
    <About />
    <Payment />
    <Footer />
  </div>;
}

export default App;
