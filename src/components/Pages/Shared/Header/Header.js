import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';



const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error))
  }

  return (
    <Navbar collapseOnSelect className='mb-4 shadow' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/' className='text-decoration-none fw-semibold fst-italic'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav align-items-center">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav >
            {
              user?.uid ? <>
                <Nav.Link href="#" ><span className='mt-lg-2 d-lg-inline-block'>{user?.displayName}</span></Nav.Link>
                <Link to='/profile'>
                  {
                    user?.photoURL ? <Image
                      src={user?.photoURL}
                      roundedCircle
                      style={{ height: '40px', width: '40px' }}
                    />
                      : <FaUserAlt />
                  }
                </Link>
                <Button onClick={handelLogout} variant="outline-primary" size="sm" className='h-lg-50 d-inline-block my-auto fw-semibold'>Log out</Button>
              </>
                :
                <>
                  <Link to='/login' className='me-2 '>

                    <Button className='p-0 text-decoration-none' variant="link">Log in</Button>
                  </Link>
                  <Link to='register'>
                    <Button className='p-0 text-decoration-none' variant="link">Register</Button>
                  </Link>
                </>
            }
          </Nav>
          <div className='d-lg-none mt-2 text-center'>
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;