import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  const { img, title, desc, author } = props;
  return (
    <div className='Story'>
      <img className="story-art" src={img} />
      <div className='story-info'>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <Author authorInfo={author}/>
      </div>
    </div>
  )
}

export default Story;
