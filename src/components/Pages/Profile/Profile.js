import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  // const [photoURl, setPhotoURl] = useState(user.photoURL);


  //useRef
  const photoURlRef = useRef(user.photoURl);

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(name, photoURl);
    console.log(photoURlRef.current.value);
  }


  const handelOnchangeName = (e) => {
    setName(e.target.value);
  }
  const handelOnchangePhotoUrl = (e) => {
    // setPhotoURl(e.target.value);

  }
  // onChange={handelOnchangePhotoUrl}

  return (
    <Form onSubmit={handelSubmit} className='my-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' readOnly defaultValue={user?.email} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handelOnchangeName} name='name' type="text" defaultValue={name} placeholder='Your Name' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoURlRef} name='photo' type="text" defaultValue={user.photoURL} placeholder='Photo URL' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;