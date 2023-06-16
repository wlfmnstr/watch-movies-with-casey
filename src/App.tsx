import React, { useState } from 'react';
import Logo from './Logo';
import './App.css';

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneNumberSubmit = () => {
    // Perform validation on the phone number here
    setValidPhoneNumber(true);
  };

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
            <p>What kind of movie watcher are you? Choose your favorite genres and preferences so Casey can suggest the best movies for you to watch together.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;