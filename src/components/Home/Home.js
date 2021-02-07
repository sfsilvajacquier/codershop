import React from 'react';
import ItemListContainer from '../../containers/ItemListContainer'
import './home.css'

const Home = ({greeting}) => {
  return (
    <div className='containerFluid home'>
      
      <h1 className='greeting'>{greeting}</h1>
      
      <ItemListContainer/>
    </div>
  );
}

export default Home;