import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import './App.css';
import './Carousel.css';
import './Modal.css';
import './Title.css';
import PhoneNumberInput from './PhoneNumberInput';
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';

const App: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [note, setNote] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePhoneNumberChange = (value?: string) => {
    setPhoneNumber(value || '');
  };

  const handleNoteChange = (event: any) => {
    setNote(event.target.value || '');
  };

  const handlePhoneNumberSubmit = () => {
    setModalOpen(true);
  };

  type ModalElements = {
    phoneNumberInput?: HTMLInputElement | null;
    noteTextarea?: HTMLTextAreaElement | null;
    modal?: HTMLDivElement | null;

  };

  const handleModalSubmit = async (event: React.MouseEvent<HTMLButtonElement>, modalElements: ModalElements) => {
    let button: HTMLButtonElement = event.currentTarget;
    let modal = modalElements.modal;
    let phoneNumberInput = modalElements.phoneNumberInput;
    let noteTextarea = modalElements.noteTextarea;
    let validNumber = isValidPhoneNumber(phoneNumber, 'US') && isPossiblePhoneNumber(phoneNumber, 'US');

    if (!validNumber && note.length <= 3) {
      modal?.classList.add('wiggle');
      setTimeout(() => modal?.classList.remove('wiggle'), 1000);
      return;
    } else if (!validNumber) {
      phoneNumberInput?.classList.add('wiggle');
      setTimeout(() => phoneNumberInput?.classList.remove('wiggle'), 1000);
      return;
    } else if (note.length <= 3) {
      noteTextarea?.classList.add('wiggle');
      setTimeout(() => noteTextarea?.classList.remove('wiggle'), 1000);
      return;
    } else {
      try {
        await fetch('/.netlify/functions/send-text', {
          method: 'POST',
          body: JSON.stringify({ phoneNumber, note })
        }).then(res => {
          if (res.ok) {
            button.innerHTML = 'Sent!';
            button.classList.add('success');
            setTimeout(() => {
              button.innerHTML = 'Nice.';
              button.classList.remove('success');
              setPhoneNumber('');
              setNote('');
              setModalOpen(false);
            }, 3000);
          } else {
            button.innerHTML = 'Error!';
            button.classList.add('error');
            setTimeout(() => {
              button.innerHTML = 'Send';
              button.classList.remove('error');
            }, 3000);
          }
        });
      } catch (error) {
        alert(error);
      }
    }
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
      titleFont: 'awesome-font',
      image: '/big-eye.jpg',
      description: 'Awesome Movie, Awesome Us'
    },
    {
      title: 'Romantic Movie',
      titleFont: 'romantic-font',
      image: 'couple-and-dog.png',
      description: 'Romantic Movie, Romantic Us (+Leo)'
    },
    {
      title: 'Sad Movie',
      titleFont: 'sad-font',
      image: 'hairy-4-legs.jpg',
      description: 'Sad Movie, Sad Us Womp Womp'
    },
    {
      title: 'Happy Movie',
      titleFont: 'awesome-font',
      image: 'big-smile-monster.jpg',
      description: 'Happy Movie, Happy Us'
    },
    {
      title: 'Pyschopath Movie',
      titlePath: 'romantic-font',
      image: 'pyschopaths-burn-window.png',
      description: 'Pyschopath buring their windows, DO NOT WATCH THIS MOVIE WTF',
    },
    {
      title: 'Boxy Movie',
      titleFont: 'sad-font',
      image: 'box-pattern.jpg',
      description: 'Boxy Movie, Boxy Us'
    },
    {
      title: 'Cartoon Movie',
      titleFont: 'awesome-font',
      image: 'boxes-cartoon.jpg',
      description: 'Cartoon Movie, Cartoon Us'
    },
    {
      title: 'Clock Movie',
      titleFont: 'romantic-font',
      image: 'clocks-deepmind.jpg',
      description: 'Clock Movie, Clock Us?'
    },
    {
      title: 'Metal Movie',
      titleFont: 'sad-font',
      image: 'metal-boxes-deepmind.jpg',
      description: 'Metal Move, Metal Us I guess..'
    },
    {
      title: 'Plant Movie',
      titleFont: 'awesome-font',
      image: 'plants-cube-deepmind.jpg',
      description: 'Plants \'n shit'
    }
  ];

  const modalRef = useRef<HTMLDivElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const noteTextareaRef = useRef<HTMLTextAreaElement>(null);

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
              <div className='movie-image-container'>
                <img className="movie-image" src={item.image} alt={item.title} />
              </div>
              <div className={`movie-title ${item.titleFont}`} >{item.title}</div>
              <div className="movie-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="Modal" ref={modalRef}>
          <div className="Modal-content">
            <h2>Phone Number</h2>
            <PhoneNumberInput
              onPhoneNumberChange={handlePhoneNumberChange}
              phoneNumber={phoneNumber}
              inputRef={phoneNumberInputRef}
            />
            <h3>Add a note?</h3>
            <textarea
              placeholder='Say nice things here...'
              value={note}
              onChange={handleNoteChange}
              ref={noteTextareaRef}
            >
            </textarea>
            <span style={{ textDecoration: 'line-through', transform: 'rotate(-3deg)', display: 'inline-block', fontSize: '1.2rem', fontWeight: 'lighter', letterSpacing: '0.1rem', textDecorationColor: 'red' }}>give casey your #</span>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleModalSubmit(event, {
              phoneNumberInput: phoneNumberInputRef.current,
              noteTextarea: noteTextareaRef.current,
              modal: modalRef.current
            })}>Request Access</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;