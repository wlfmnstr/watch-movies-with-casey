import { useContext, useEffect } from 'react';
import { MaskContext } from '../../App.tsx';
import styled, { css } from 'styled-components';

const StyledMask = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.627),rgba(0, 0, 0, 0.773), rgba(0, 0, 0, 0.965), rgba(0, 0, 0, 0.773), rgba(0, 0, 0, 0.306));
  height: 100%;
  width: 100%;
  /* opacity: .5; */
  display: none;
  z-index: 2;
  
  /* opacity: 1; */
  /* transition: opacity 2s ease-in; */
  /* position: 'unset'; */
`;


export const Mask = () => {
  const { styles, setStyles } = useContext(MaskContext);

  return (
    <StyledMask style={{...styles}}>
      {/* Mask content here */}
    </StyledMask>
  );
}