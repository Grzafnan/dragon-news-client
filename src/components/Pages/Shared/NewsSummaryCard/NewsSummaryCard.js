import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { HiEye } from "react-icons/hi";

const NewsSummaryCard = ({ news }) => {
  // console.log(news);

  const { author, title, _id, details, total_view, image_url, rating } = news;

  return (
    <Card className="mb-5">
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <Image
            roundedCircle
            style={{ width: '60px' }}
            src={author?.img}
          />
          <div className='ms-3'>
            <h5 className='mb-0'>{author?.name ? author.name : 'No name found'}</h5>
            <p className='mb-0'> {author?.published_date ? author.published_date : 'No published date'} </p>
          </div>
        </div>

        <div>
          <FaRegBookmark className='me-2' />
          <FaShareAlt />
        </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} />
        <Card.Text className='mt-1'>
          {
            details.length > 250 ?
              <span> {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </span>
              :
              <span>details</span>
          }
        </Card.Text>

      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">

        <div className='d-flex align-items-center'>
          <FaStar className='text-warning me-1' />
          <span>{rating?.number}</span>
        </div>

        <div className='d-flex align-items-center'>
          <HiEye className='me-1' />
          <span>{total_view ? total_view : 'No views'}</span>
        </div>
      </Card.Footer>
    </Card >
  );
};

export default NewsSummaryCard;