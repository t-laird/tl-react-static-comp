// Create an Author component
import React, { Component } from 'react';
import './Author.css'

const Author = (props) => {
  let newProps = props.props;
  console.log(newProps);
  return (
    <div className='story-author-info'>
      <img src={newProps.authImg} className='story-author-image' />
      <div className='author-info-text'>
        <h4 className="author-text">{newProps.authName}</h4>
        <h4 className="author-text">{newProps.estTime} read</h4>
      </div>
    </div>    
  )
}

export default Author;