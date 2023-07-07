import React, { useEffect, useRef, useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput.tsx';
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';

type ModalProps = {
  changePhoneNumberStatus: (value: boolean) => void;
};


const Modal = ({ changePhoneNumberStatus }: ModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [note, setNote] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePhoneNumberChange = (value?: string) => {
    setPhoneNumber(value || '');
  };

  const handleNoteChange = (event: any) => {
    setNote(event.target.value || '');
  };

  const changeModalState = (state: boolean) => {
    setModalOpen(state);
  };

  const changeSuccessState = (state: boolean) => {
    setSuccess(state);
    changePhoneNumberStatus(state);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalOpen && event.target instanceof HTMLElement && !event.target.closest('.Modal-content')) {
        changeModalState(false);
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
  }, [modalOpen, changeModalState]);

  const modalRef = useRef<HTMLDivElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const noteTextareaRef = useRef<HTMLTextAreaElement>(null);

  type ModalElements = {
    phoneNumberInput: HTMLInputElement | null;
    noteTextarea: HTMLTextAreaElement | null;
    modal: HTMLDivElement | null;
  };

  async function handleModalSubmit(event: React.MouseEvent<HTMLButtonElement>, modalElements: ModalElements) {
    event.preventDefault();
    const { phoneNumberInput, noteTextarea, modal } = modalElements;
    const button = event.currentTarget;
    if (modalElements.phoneNumberInput && modalElements.noteTextarea && modalElements.modal) {
      const isPhoneNumberValid = isValidPhoneNumber(phoneNumber, 'US') && isPossiblePhoneNumber(phoneNumber, 'US');
      const isNoteValid = note.length > 3;

      if (!isPhoneNumberValid && !isNoteValid) {
        modal?.classList.add('wiggle');
        setTimeout(() => modal?.classList.remove('wiggle'), 1000);
        return;
      } else if (!isPhoneNumberValid) {
        phoneNumberInput?.classList.add('wiggle');
        setTimeout(() => phoneNumberInput?.classList.remove('wiggle'), 1000);
        return;
      } else if (!isNoteValid) {
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
              changeSuccessState(true);
              button.innerHTML = 'Hell yeah 🙏';
              button.classList.add('success');

              setTimeout(() => {
                button.classList.remove('success');
                setPhoneNumber('');
                setNote('');
                changeModalState(false);
                changeSuccessState(false);
                button.innerHTML = 'Request Access';
              }, 8000);
            } else {
              button.innerHTML = 'Error!';
              button.classList.add('error');
              setTimeout(() => {
                button.classList.remove('error');
                button.innerHTML = 'Request Access';
              }, 8000);
            }
          });
        } catch (error) {
          button.innerHTML = 'Error!';
          button.classList.add('error');
          setTimeout(() => {
            button.classList.remove('error');
            button.innerHTML = 'Request Access';
          }, 8000);
        }
      }
    }
  };

  return (modalOpen &&
    <div className="Modal" ref={modalRef}>
      <div className="Modal-content">
        <h2>Phone Number</h2>
        <PhoneNumberInput
          onPhoneNumberChange={handlePhoneNumberChange}
          phoneNumber={phoneNumber}
          inputRef={phoneNumberInputRef} />
        <h3>Add a note?</h3>
        <textarea
          placeholder='Say nice things here...'
          value={note}
          onChange={handleNoteChange}
          ref={noteTextareaRef}
        >
        </textarea>
        <span style={{ textDecoration: 'line-through', transform: 'rotate(-3deg)', display: 'inline-block', fontSize: '1.2rem', fontWeight: 'lighter', letterSpacing: '0.1rem', textDecorationColor: 'red' }}>give casey your #</span>
        <button onClick={(event) => handleModalSubmit(event, {
          phoneNumberInput: phoneNumberInputRef.current,
          noteTextarea: noteTextareaRef.current,
          modal: modalRef.current
        })}>Request Access</button>
      </div>
      {success && <Confetti />}
    </div>
  );
}

export default Modal;