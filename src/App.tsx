import React from 'react';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className="standard-text">Watch Something </span>
          <span className="exciting-text">Awesome</span>
        </h1>
        <h1>
          <span className="standard-text">With Someone </span>
          <span className="exciting-text">Awesome</span>
        </h1>
        <h2>Prepare to enjoy a movie with Casey!</h2>
      </header>


      <section className="App-section">
      <img className="Section-image" src="big-eye.jpg" alt="Get Started" />
        <div className="Section-content">
          <h3>Get Started</h3>
          <p>What kind of movie watcher are you? Choose your favorite genres and preferences so Casey can suggest the best movies for you to watch together.</p>
        </div>
      </section>

      <section className="App-section">
        <img className="Section-image" src="big-smile-monster.jpg" alt="Movie Essentials" />
        <div className="Section-content">
          <h3>Movie Essentials</h3>
          <p>Pick the right movie snacks! The best part of watching a movie is the snacks. Let Casey guide you through picking the perfect snacks for your movie night.</p>
        </div>
      </section>

      <section className="App-section">
        <img className="Section-image" src="box-pattern.jpg" alt="Understand Your Movie & Timing" />
        <div className="Section-content">
          <h3>Understand Your Movie & Timing</h3>
          <p>Understand the plot and timing. Casey will provide a quick summary of the movie and the best time to start watching to accommodate different time zones.</p>
        </div>
      </section>

      <footer className="App-footer">
        <p>Get ready to embark on a movie adventure with Casey!</p>
      </footer>
    </div>
  );
}

export default App;
