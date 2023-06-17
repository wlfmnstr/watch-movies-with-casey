import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import './App.css';
import './Carousel.css';
import './Modal.css';
import './Title.css';

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);


  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneNumberSubmit = () => {
    console.log("open")
    console.log(modalOpen)
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    setValidPhoneNumber(true);
    setModalOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalOpen && event.target instanceof HTMLElement && !event.target.closest('.Modal-content')) {
        handleModalClose();
      }
    };

    if (modalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalOpen, handleModalClose]);

  const carouselItems = [
    {
      title: 'Awesome Movie',
      image: '/big-eye.jpg',
      description: 'Awesome Movie, Awesome Us'
    },
    {
      title: 'Romantic Movie',
      image: 'couple-and-dog.png',
      description: 'Romantic Movie, Romantic Us (+Leo)'
    },
    {
      title: 'Sad Movie',
      image: 'hairy-4-legs.jpg',
      description: 'Sad Movie, Sad Us Womp Womp'
    },
    {
      title: 'Happy Movie',
      image: 'big-smile-monster.jpg',
      description: 'Happy Movie, Happy Us'
    },
    {
      title: 'Pyschopath Movie',
      image: 'pyschopaths-burn-window.png',
      description: 'Pyschopath buring their windows, DO NOT WATCH THIS MOVIE WTF',
    },
    {
      title: 'Boxy Movie',
      image: 'box-pattern.jpg',
      description: 'Boxy Movie, Boxy Us'
    },
    {
      title: 'Cartoon Movie',
      image: 'boxes-cartoon.jpg',
      description: 'Cartoon Movie, Cartoon Us'
    },
    {
      title: 'Clock Movie',
      image: 'clocks-deepmind.jpg',
      description: 'Clock Movie, Clock Us?'
    },
    {
      title: 'Metal Movie',
      image: 'metal-boxes-deepmind.jpg',
      description: 'Metal Move, Metal Us I guess..'
    },
    {
      title: 'Plant Movie',
      image: 'plants-cube-deepmind.jpg',
      description: 'Fucking Plants \'n shit'
    }
  ];

  return (
    <div className="App">
      <Logo />
      {<header className="App-header title-container">
        <h1>
          <span className="standard-text">Hangout With Your</span>
        </h1>
        <h1>
          <span className="exciting-text">Favorite</span>
        </h1>
        <h1>
          <span className="standard-text">Person!</span>
        </h1>
        {!validPhoneNumber && (
          <button onClick={handlePhoneNumberSubmit} className='button-no-blur'>Get Started</button>
        )}
      </header>}

      <div className={`Content-wrapper ${validPhoneNumber ? '' : 'blurred'} content`}>
        <div className="movie-strip">
          {carouselItems.map((item, i) => (
            <div key={i} className="movie-item">
              <img className="movie-image" src={item.image} alt={item.title} />
              <div className="movie-title">{item.title}</div>
              <div className="movie-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="Modal">
          <div className="Modal-content">
            <h2>Enter your phone number to continue</h2>
            <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
            <button onClick={handleModalSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;