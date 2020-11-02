import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
      <h1>Top of the line ML Model powered by AWS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/lost-1.jpg'
              text='How does this work?'
              label='Learn More'
              path='/about-us'
            />
            <CardItem
              src='images/lost-2.jpg'
              text='Anyone can contribute'
              label='Feed'
              path='/feed'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lost-3.jpg'
              text='Using cameras all over the city'
              label='Learn More'
              path='/about-us'
            />
            <CardItem
              src='images/lost-4.jpg'
              text='Testimonies of success'
              label='Learn More'
              path='/about-us'
            />
            <CardItem
              src='images/lost-5.jpg'
              text='Upon sighting local police forces are warned'
              label='Learn More'
              path='/about-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;