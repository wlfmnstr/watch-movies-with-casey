import { useContext, useEffect } from 'react';
import { MaskContext } from '../../App.tsx';
import styled from 'styled-components';

const LandingDiv = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
`;

const Landing = () => {
    const { styles, setStyles } = useContext(MaskContext);
    
    return (
        <LandingDiv>
            {/* Landing Content */}
        </LandingDiv>
    )
}

export default Landing;