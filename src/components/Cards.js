import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              {/* Makes Cards Link */}
            <CardItem
              src='/images/img-10.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./images/img-15.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          {/* Makes card links */}
          <ul className='cards__items'>
            <CardItem
              src='./images/img-20.jpg'
              text='Explore the mysterious jungle in Panguipulli, Chile'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='./images/img-19.jpg'
              text='Sail on the alluring Grand Canal in Venice Italy'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='./images/img-16.jpg'
              text='Travel cross country in our provided RV'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;