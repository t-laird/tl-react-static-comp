import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (props) => {
  let storyProps = props.props;
  // console.log(storyProps);
  return (
    <div className='Story'>
      <img className="story-art" src={storyProps.img} />
      <div className='story-info'>
        <div>
          <h3>{storyProps.title}</h3>
          <p>{storyProps.desc}</p>
        </div>
        <Author props={storyProps}/>
        {/* create an Author component and add it here */}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
