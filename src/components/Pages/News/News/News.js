import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {
  const news = useLoaderData();
  const { author, details, image_url, title, total_view, rating, category_id } = news;

  return (
    <Card className='mb-5'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='d-flex justify-content-evenly align-items-center mb-2'>
          <div>
            <p className='mb-0'><strong>Author:</strong> <small>{author?.name ? author.name : 'No name found'}</small></p>
          </div>
          <div>
            <p className='mb-0'><strong>Published Date:</strong> <small>{author?.published_date ? author.published_date : 'No name found'}</small></p>
          </div>
          <div className='d-flex align-items-center'>
            <FaStar className='text-warning me-1' />
            <span className='fw-bold'>{rating?.number}</span>
          </div>
        </div>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="outline-primary w-100">All news this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;