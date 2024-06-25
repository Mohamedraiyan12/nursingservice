import './App.css';
import Navbar2 from './components/Navbarcontent/Navbar2';
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Headertop from './components/Headertop'
import Footer from './components/Footer'
import Career from './components/Career'
import Nopage from './components/Nopage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {

  return (
    <>  
        <Router>
        <Headertop />
        <Navbar2 />
        <Routes> 
          <Route path ='/'element={<Home />}></Route>
          <Route path ='/service' element={<Service />}></Route>
          <Route path ='/contact' element={<Contact />}></Route>
          <Route path='/career' element ={<Career />}></Route>
          <Route path ='*' element ={<Nopage />}></Route>
        </Routes>
        <Footer />
       </Router>
    </>
  )
}
export default App;
