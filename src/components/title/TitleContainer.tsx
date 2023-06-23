import styled from "styled-components";

type TitleProps = {
  toggleModal: () => void;
};

const StyledTitleContainer = styled.div`
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 100;

    .exciting-text {
        font-family: 'RockSalt', cursive;
        color: rgba(255, 255, 255, 0.6);
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }
    
    h1 {
      font-size: 50px;
      line-height: 1.2;
    }

    h2 {
      /* font-size: 28px; */
      /* margin-top: 20px; */
      font-weight: 300;
    }

    .standard-text {
      color: #fff;
      font-weight: 400;
    }
`;

const ExcitingText = styled.span`
    font-family: 'RockSalt', cursive;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 50px;
    line-height: 1.2;
    font-weight: bolder;
  `;

const StandardText = styled.h1`
    color: #fff;
    font-weight: 400;
    font-size: 50px;
    line-height: 1.2;
`;

const StyledButton = styled.button`
    background-color: rgb(229, 9, 20);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to top, rgb(215, 9, 19), rgb(238, 14, 14));
    margin-top: 10px;

  :hover {
    color: #d9d9d9;
    box-shadow: 10 4px 6px rgb(255, 255, 255);
  }
`;

const TitleContainer = ({ toggleModal }: TitleProps) => {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleModal();
  };

  return (
    <StyledTitleContainer>
      <StandardText>Watch With Your</StandardText>
      <ExcitingText>Favorite</ExcitingText>
      <StandardText>Person</StandardText>
      <StyledButton onClick={handleButtonClick}>Get Started</StyledButton>
    </StyledTitleContainer>
  );
}

export default TitleContainer;