import { Toast } from 'bootstrap';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const { createUser, updateProfileName, verify } = useContext(AuthContext);


  const handelSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, email, photoURL, password);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        updateName();
        verifyEmail();
        form.reset();
        setError('')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });


    const updateName = () => {
      updateProfileName(name, photo)
        .then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          setError(error.message);
          // ...
        });
    }

    const verifyEmail = () => {
      verify()
        .then(() => {
          // Email verification sent!
          toast.success('Email verification sent! Check Inbox!')
          // ...
        })
        .catch(error => {
          console.error(error)
        });
    }
  }

  const handelChecked = event => {
    setAccepted(event.target.checked);
  }



  return (
    <div className='my-5 border border-1 rounded-3 p-5'>
      <h3 className='text-center text-primary'>Register</h3>
      <Form onSubmit={handelSignUp} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photo' type="text" placeholder="Your photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handelChecked}
            type="checkbox"
            label={<>Accept <Link to='/terms'> terms and conditions</Link></>} />
          <Form.Text className="text-danger">
            {error}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;