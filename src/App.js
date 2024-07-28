import "./App.css";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";

function App() {
  return <div className="App">
    <MiniHeader/>
    <Header />
    <Payment />
    <Footer />
  </div>;
}

export default App;
