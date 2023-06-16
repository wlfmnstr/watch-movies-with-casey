import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import './App.css';

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


  return (
    <div className="App">
      <Logo />
      <header className="App-header title-container">
        <h1>
          <span className="standard-text">Movies with your</span>
        </h1>
        <h1>
          <span className="exciting-text">Favorite</span>
        </h1>
        <h1>
          <span className="standard-text">People</span>
        </h1>
        {!validPhoneNumber && (
          <button onClick={handlePhoneNumberSubmit} className='button-no-blur'>Start Watching</button>
        )}
      </header>

      <div className={`Content-wrapper ${validPhoneNumber ? '' : 'blurred'} content`}>
        <section className="App-section">
          <img className="Section-image" src="big-eye.jpg" alt="Get Started" />
          <div className="Section-content">
            <h3>Get Started</h3>
            <p>Lorem Ipsum yadayadayada I really want this girl's phone number, probably never gonna happen. Cowabunga dudes.</p>
          </div>
        </section>
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