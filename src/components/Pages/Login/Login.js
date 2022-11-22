import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const [error, setError] = useState('');
  const { logIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'


  const handelSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    logIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        form.reset();
        setError('');
        if (user.emailVerified) {

          navigate(from, { replace: true });
        }
        else {
          toast.error('Your email in not verified!');
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false)
      })
  }


  return (
    <div className='my-5'>
      <h3 className='text-center text-primary'>Login</h3>
      <Form onSubmit={handelSignIn} className='border border-1 rounded-3 p-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
          <Form.Text className="text-danger">
            {error}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;