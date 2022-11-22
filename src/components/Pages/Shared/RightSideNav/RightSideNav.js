import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import { HiBriefcase } from "react-icons/hi";
import BrandCarousel from '../Carousel/BrandCarousel';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handelSignInWithGoogle = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      });
  }


  const handelSignInWithGithub = () => {
    providerLogin(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      });
  }



  return (
    <div>
      <div>
        <ButtonGroup vertical className='w-100'>
          <Button onClick={handelSignInWithGoogle} className='mb-2' variant='outline-primary'> <FaGoogle /> Sign in with Google</Button>
          <Button onClick={handelSignInWithGithub} variant='outline-dark'> <FaGithub /> Sign in with Github</Button>
        </ButtonGroup>
      </div>

      <div className='mt-4'>
        <h4> Follow on us</h4>

        <ListGroup>
          <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaYoutube /> Youtube</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaDiscord /> Discord</ListGroup.Item>
          <ListGroup.Item className='mb-2'><HiBriefcase /> Privacy Policy</ListGroup.Item>
          <ListGroup.Item><AiOutlineBars /> Terms & Conditions</ListGroup.Item>
        </ListGroup>
      </div>

      <div className='mt-4'>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;