import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
