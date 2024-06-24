import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Headertop from './components/Headertop'
function App() {
  return (
    <Router>
      <Headertop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path = '/Contact' element ={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
