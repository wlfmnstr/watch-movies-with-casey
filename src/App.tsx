import { useState, type CSSProperties, createContext, type HTMLAttributes, useReducer } from 'react';
import Logo from './components/logo/Logo.tsx';
import './App.css';
import './components/carousel/Carousel.css';
import './components/modal/Modal.css';
import './components/title/Title.css';
import CustomParticlesComponent from './components/particles/CustomParticlesComponent.tsx';
import styled from 'styled-components';
import Landing from './components/landing/Landing.tsx';
import TitleContainer from './components/title/TitleContainer.tsx';
import Home from './components/home/Home.tsx';

type AppContextType = {
  styles: CSSProperties;
  setStyles: (styles: CSSProperties) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  logoVisible: boolean;
  setLogoVisible: (visible: boolean) => void;
  titleVisible: boolean;
  setTitleVisible: (visible: boolean) => void;
  contentVisible: boolean;
  setContentVisible: (visible: boolean) => void;
  buttonVisible: boolean;
  setButtonVisible: (visible: boolean) => void;
  dispatchAppContext: React.Dispatch<AppContextAction>;
};

const defaultAppContext: AppContextType = {
  styles: {},
  setStyles: () => {},
  modalVisible: false,
  setModalVisible: () => {},
  logoVisible: false,
  setLogoVisible: () => {},
  titleVisible: false,
  setTitleVisible: () => {},
  contentVisible: false,
  setContentVisible: () => {},
  buttonVisible: false,
  setButtonVisible: () => {},
  dispatchAppContext: () => {},
};

type AppContextAction =
  | { type: 'SET_STYLES'; payload: React.CSSProperties }
  | { type: 'SET_MODAL_VISIBLE'; payload: boolean }
  | { type: 'SET_LOGO_VISIBLE'; payload: boolean }
  | { type: 'SET_TITLE_VISIBLE'; payload: boolean }
  | { type: 'SET_CONTENT_VISIBLE'; payload: boolean }
  | { type: 'SET_BUTTON_VISIBLE'; payload: boolean };

function AppContextReducer(
  state: AppContextType,
  action: AppContextAction
) {
  switch (action.type) {
    case 'SET_STYLES':
      return { ...state, styles: action.payload };
    case 'SET_MODAL_VISIBLE':
      return { ...state, modalVisible: action.payload };
    case 'SET_LOGO_VISIBLE':
      return { ...state, logoVisible: action.payload };
    case 'SET_TITLE_VISIBLE':
      return { ...state, titleVisible: action.payload };
    case 'SET_CONTENT_VISIBLE':
      return { ...state, contentVisible: action.payload };
    case 'SET_BUTTON_VISIBLE':
      return { ...state, buttonVisible: action.payload };
    default:
      return state;
  }
}

const MaskContext = createContext<AppContextType>({
  ...defaultAppContext,
  setStyles: () => { },
  setModalVisible: () => { },
  setLogoVisible: () => { },
  setTitleVisible: () => { },
  setContentVisible: () => { },
  setButtonVisible: () => { },
});

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;
`;

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [appContext, dispatchAppContext] = useReducer(
    AppContextReducer,
    defaultAppContext
  );

  const handleNavButtonClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // If on landing page and the button clicked was the Netflix "Get Started" button perform the following:
    if (showLanding && event.currentTarget.id === 'get-started') {
      setShowLanding(false);
      setShowHome(true);
    }
  };

  return (
    <MaskContext.Provider value={{...appContext, dispatchAppContext}}>
      <StyledApp className='App'>
        {showLanding && <Landing onClick={handleNavButtonClick} />}
        {showHome && <Home />}
      </StyledApp>
    </MaskContext.Provider>
  );
}
