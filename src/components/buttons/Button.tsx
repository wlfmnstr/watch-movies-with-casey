import styled from "styled-components";
import { useEffect, useState } from "react";

const NetflixButton = styled.img`
  /* width: 80px; */
  /* height: 80px; */
  /* border-radius: 50%; */
  /* border: none; */
  /* background-color: #e50914; */
  /* color: white; */
  /* background-color: white; */
  /* font-size: 24px; */
  /* font-weight: bold; */
  position: absolute;
  bottom: 45%;
  left: 45%;
  width: 10%;
  height: 10%;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: transparent;
  }
`;

interface NetflixButtonWithFadeInProps {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const NetflixButtonWithFadeIn = ({ onClick }: NetflixButtonWithFadeInProps): JSX.Element => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // setShowButton(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event) {
      event.preventDefault();
    }
    onClick(event);
  };

  return (
    <NetflixButton className={showButton ? "fade-in" : ""} onClick={handleClick} src='/keyhole.svg'/>
  );
};

export default NetflixButtonWithFadeIn;