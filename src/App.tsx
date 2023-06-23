import { useState, type CSSProperties, createContext } from 'react';
// import Logo from './components/logo/Logo.tsx';
import './App.css';
import './components/carousel/Carousel.css';
import './components/modal/Modal.css';
import './components/title/Title.css';
// import Landing from './components/landing/Landing.tsx';
// import TitleContainer from './components/title/TitleContainer.tsx';
// import { OurflixContent } from './components/carousel/OurflixContent.tsx';
// import Modal from './components/modal/Modal.tsx';
// import { Mask } from './components/mask/Mask.tsx';
// import SeaAnemoneComponent from './components/particles/SeaAnemoneComponent.tsx';
// import CustomParticlesComponent from './CustomParticlesComponent';
import ParticlesContainer from './components/particles/CustomParticlesComponent.tsx';
import styled from 'styled-components';

type MaskContextType = {
  styles: CSSProperties;
  setStyles: (styles: CSSProperties) => void;
}

export const MaskContext = createContext<MaskContextType>({
  styles: {},
  setStyles: () => { }
});

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  //display: flex;
`;

export default function App() {
  // const [showLanding, setShowLanding] = useState(true);
  // const [showLogo, setShowLogo] = useState(true);
  // const [showTitle, setShowTitle] = useState(true);
  // const [showContent, setShowContent] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [phoneNumberStatus, setPhoneNumberStatus] = useState(false);
  const [maskStyles, setMaskStyles] = useState<React.CSSProperties>({})
  const [particlesLoaded, setParticlesLoaded] = useState<boolean>(false);

  // const toggleLanding = () => setShowLanding(!showLanding);
  // const toggleTitle = () => setShowTitle(!showTitle);
  // const toggleContent = () => setShowContent(!showContent);
  // const toggleLogo = () => setShowLogo(!showLogo);
  // const toggleModal = () => setShowModal(!showModal);

  return (
    <MaskContext.Provider value={{ styles: maskStyles, setStyles: setMaskStyles }}>
      <StyledApp>
        {/* {<Landing />} */}
        {/* {<Mask />} */}
        {/* {<SeaAnemoneComponent />} */}
        {/* {<CustomParticlesComponent />} */}
        <ParticlesContainer />
        {/* {showLogo && <Logo />} */}
        {/* {showTitle && <TitleContainer toggleModal={toggleModal} />} */}
        {/* {showContent && <OurflixContent />} */}
        {/* {showModal && <Modal changePhoneNumberStatus={setPhoneNumberStatus} />} */}
      </StyledApp>
    </MaskContext.Provider>
  );
}
