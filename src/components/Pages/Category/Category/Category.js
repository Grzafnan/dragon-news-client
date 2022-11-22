import React from 'react';
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

  const categoryNews = useLoaderData();
  // console.log(categoryNews);


  return (
    <div>
      {
        categoryNews.length === 0 ? <div>
          <h3 className='text-primary text-center my-5'>
            No News found!!
          </h3>
        </div>
          :
          <>
            {
              categoryNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
              />)
            }
          </>
      }
    </div>
  );
};

export default Category;