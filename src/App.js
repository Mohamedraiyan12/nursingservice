import './App.css';
import Navbar2 from './components/Navbarcontent/Navbar2';
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Headertop from './components/Headertop'
import Footer from './components/Footer'
import Career from './components/Career'
import Nopage from './components/Nopage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Maybeshownavbar from './components/Maybeshownavbar';
import Ecommerce from './components/ecommerce/Ecommerce'
import Wholesale from './components/ecommerce/omponents/Wholesale';
import Retail from './components/ecommerce/omponents/Retail';
import Cart from './components/ecommerce/pages/Cart'
import Admin from './components/ecommerce/Admin'
function App() {
  return (
    <>
      <Router>
        <Maybeshownavbar>
        <Headertop  />
        <Navbar2 />
        </Maybeshownavbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/ecommerce' element={<Ecommerce />}></Route>
          <Route path='/wholesale' element={<Wholesale />}></Route>
          <Route path='/retail' element={<Retail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path ='/admin' element ={<Admin />}></Route>
          <Route path='*' element={<Nopage />}></Route>
        </Routes>
        <Maybeshownavbar>
          <Footer />
        </Maybeshownavbar>
      </Router>
    </>
  )
}
export default App;