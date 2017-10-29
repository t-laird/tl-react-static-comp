import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = ( props ) => {
  const {storiesTitle, stories } = props;
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          stories.map( story => {
            const {img, title, desc, authImg, authName, estTime} = story;
            let authorInfo = {authImg, authName, estTime};
            return (<Story img={img} title={title} desc={desc} author={authorInfo} />);
          })
        }
      </div>
    </div>
  )
}

export default Stories;
