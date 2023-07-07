import { useContext, useEffect } from 'react';
import AppContext from '../../App.tsx';
import styled from 'styled-components';
import CustomParticlesComponent from '../particles/CustomParticlesComponent.tsx';
import NetflixButton from '../buttons/Button.tsx';

type StyledLandingProps = {
    visible2: boolean;
}


const StyledLanding = styled.div<StyledLandingProps>`
    opacity: ${(props) => (props.visible2 ? 1 : 0)};
    transition: opacity 1s .5s ease-in;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

type LandingProps = {
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Landing = ({ onClick }: LandingProps): JSX.Element => {
    const { landingVisible, setLandingVisible } = useContext(AppContext);


    return (
        <StyledLanding className="landing" visible2={true}>
            <CustomParticlesComponent />
            <NetflixButton onClick={onClick} />
        </StyledLanding>
    )
}

export default Landing;