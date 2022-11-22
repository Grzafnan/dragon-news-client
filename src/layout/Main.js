import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../components/Pages/Shared/Header/Header';
import LeftSideNav from '../components/Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/Pages/Shared/RightSideNav/RightSideNav';
import Footer from '../components/Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col lg='2' className='d-none d-lg-block'>
            <LeftSideNav />
          </Col>

          <Col lg='7'>
            <Outlet />
          </Col>

          <Col lg='3'>
            <RightSideNav />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Main;