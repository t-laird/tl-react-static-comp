// Create an Author component
import React, { Component } from 'react';
import './Author.css'

const Author = (props) => {
  const {authImg, authName, estTime} = props.authorInfo;
  return (
    <div className='story-author-info'>
      <img src={authImg} className='story-author-image' />
      <div className='author-info-text'>
        <h4 className="author-text">{authName}</h4>
        <h4 className="author-text">{estTime} read</h4>
      </div>
    </div>    
  )
}

export default Author;