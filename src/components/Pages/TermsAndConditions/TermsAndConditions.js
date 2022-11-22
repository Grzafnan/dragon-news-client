import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className='my-5'>
      <h4 className='text-primary'>Terms And Conditions</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eos perspiciatis saepe rem atque dicta rerum, qui ullam! Distinctio velit enim voluptatum laboriosam commodi recusandae nesciunt officiis molestias, eaque ducimus esse explicabo cupiditate praesentium voluptate doloribus numquam debitis obcaecati neque iure nobis, nulla quae? Totam debitis sapiente blanditiis expedita rerum dicta architecto consectetur nihil beatae nostrum facilis nam necessitatibus, modi ducimus magnam suscipit deleniti quas dignissimos dolorem minus! Quos, ratione. Enim hic harum cumque sed facere molestias et nobis quas repudiandae voluptate, at pariatur ea, fuga dolor in mollitia minus voluptas iure vel fugiat, dicta magnam distinctio. Veniam, mollitia magni!</p>
      <p >Go to <Link to='/register'> Register </Link></p>
    </div>
  );
};

export default TermsAndConditions;