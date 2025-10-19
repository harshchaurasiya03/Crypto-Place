import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Coin from './Pages/Coin/Coin.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {


  return (
   <div className="app">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/coin/:coinId' element={<Coin/>}/> 
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
