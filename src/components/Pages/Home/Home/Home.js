import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
  const allNews = useLoaderData();
  // console.log(allNews.length);


  return (
    <div>
      {
        allNews?.map(news => <NewsSummaryCard
          key={news._id}
          news={news}
        />)
      }
    </div>
  );
};

export default Home;