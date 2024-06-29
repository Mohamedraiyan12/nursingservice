import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoimg from '../assets/logo.png'
import './Navbar2.css'
function Navbar2() {
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
            <Link to ='/' className='home'><li>Home</li></Link>
            <Link to = '/service' className ='service'><li>Services</li></Link>
            <Link to = '/contact' className ='contact'><li>Contact us</li></Link>
          </Nav>
          <div className="btnouter">
          <a href ='/ecommerce'><button className ='btn' id='contact'>Buy products</button></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar2;