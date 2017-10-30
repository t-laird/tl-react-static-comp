import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: '../public/stoory1.jpg',
    title: 'So you\'re not his background wallpaper...',
    desc: 'Who\'s this other dog and should you be worried?',
    authImg: '../public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: '../public/stoory2.jpeg',
    title: 'Dog vacations 2017',
    desc: 'What is this "beach" and do they have fetch there too?',
    authImg: '../public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: '../public/stoory3.jpg',
    title: '"Don\'t you have enough photos of me?"',
    desc: 'How to confront your human who spoils every moment with their camera.',
    authImg: '../public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: '../public/stoory4.jpeg',
    title: 'He said "Do you want to go for a walk?" 10 Minutes Ago',
    desc: 'You\'ve been ready for 15. Is this thing happening or what?',
    authImg: '../public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]
const stories2 = [
  {
    img: '../public/stoory5.jpg',
    title: 'On a short leash?',
    desc: 'Here are 5 helpful tips to get the freedom you need',
    authImg: '../public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: '../public/stoory6.png',
    title: 'So you weren\'t the only Ariel at your weekend halloween party...',
    desc: 'Get your creativity back!',
    authImg: '../public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: '../public/stoory7.jpeg',
    title: 'Why can I sit at the table but not eat the table food?',  
    desc: 'Helpful hints for deciphering mixed signals.',    
    authImg: '../public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: '../public/stoory8.jpg',
    title: 'You know I don\'t like water',   
    desc: 'So why would you put me on a paddle board?',   
    authImg: '../public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Today's Top Stories"
                stories={stories} />
      <Stories storiesTitle="Pop Culture" stories={stories2} />
      <Footer />
    </div>
  );
}

export default App;
