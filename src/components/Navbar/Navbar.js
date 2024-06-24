
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoimg from '../assets/logo.png'
import './Navbar.css'
function NavScrollExample() {
  return (
    <Navbar expand="md" className="bg-body-transparent outernavbars">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <div className="logo">
            <img src={logoimg} alt='logoimages' width={80} height={50}/>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse>
          <Nav className="me-auto navlinks">
            <Link path to='/' className='home'><li>Home</li></Link>
            <Link path to= '/service' className='service'><li>Services</li></Link>
            <Link path to= '/contact' className='contact' id='contact'><li>Contact us</li></Link>
          </Nav>
          <div className="btnouter">
          <button className ='btn' id='contact'>Buy purchase</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScrollExample;