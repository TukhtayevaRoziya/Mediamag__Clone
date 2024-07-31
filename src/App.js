import "./App.css";
import MiniHeader from "./components/miniHeader/MiniHeader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import Discount from "./components/discount/Discount";
import Sidebar from "./components/sidebar/Sidebar";
import Basket from "./components/basket/Basket";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150' }
  ])
  return <div className="App">
    <MiniHeader/>
    <Header />
    <Sidebar/>
    <Catalog/>
    <Discount products={products}/>
    <About />
    <Payment />
    <Footer />
    <Basket />
  </div>;
}

export default App;
