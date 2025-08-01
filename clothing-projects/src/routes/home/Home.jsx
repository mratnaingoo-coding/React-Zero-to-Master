import React from 'react'
import { Outlet } from 'react-router';
import Directory from '../../components/directory/Directory.component';

const Home = () => {
    const categoriesDir = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (

    <>
    <div>
      <Directory categoriesDir={categoriesDir} />
      <Outlet />
    </div>
    </>

  );
}

export default Home