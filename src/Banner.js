import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Being a dog is hard. </h2>
        <p>So get the best info from the people (dogs) who know it best. We'll have you back to barking and tail-wagging before you can spell w-a-l-k.</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;
