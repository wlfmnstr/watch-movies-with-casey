import { useContext } from 'react';
import { MaskContext } from '../../App.tsx';
import styled from 'styled-components';

import cpl from '/cpl.png';

const StyledLogo = styled.div`
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 0px;
    text-shadow: 1px 1px 4px #7c7c7c5f;
    color: rgb(229, 9, 20);
    font-size: 2.5vw;
  }

  img {
    opacity: 10%;
    width: 7vw;
  }

  @media (min-width: 300px) {
    .logo-container > h1 {
        font-size: 5vw;
    }

    .logo-image {
        width: 9vw;
    }
  }

  @media (min-width: 768px) {
      .logo-container > h1 {
          font-size: 3vw;
      }

      .logo-image {
          width: 4vw;
      }
  }

  @media (min-width: 1024px) {
      .logo-container > h1 {
          font-size: 1.5vw;
      }

      .logo-image {
          width: 5vw;
      }
  }

  @media (min-width: 1440px) {
      .logo-container > h1 {
          font-size: 1.8vw;
      }

      .logo-image {
          width: 6vw;
      }
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img className="logo-image" src={cpl} alt="cpl logo" />
      <h1 className='logo-text'>OURFLIX</h1>
    </StyledLogo>
  );
}

export default Logo;