import { useContext } from "react";
import Logo from "../logo/Logo";
import TitleContainer from "../title/TitleContainer";
import { MaskContext } from "../../App";
import styled from "styled-components";


interface StyledHomeProps extends HTMLAttributes<HTMLDivElement> {
    visible2: boolean;
}

const StyledHome = styled.div<StyledHomeProps>`
    opacity: ${(props) => (props.visible2 ? 1 : 0)};
    transition: opacity 2s ease-in-out;
    background-color: black;
    height: 100%;
    width: 100%;
    pointer-events: ${(props) => (props.visible2 ? 'auto' : 'none')}; /* add this line to disable pointer events when show is false */
`;

const Home = (): JSX.Element => {
    const { styles, setStyles } = useContext(MaskContext);

    return (
        <StyledHome className="home" visible2={styles.visible}>
            {showLogo && <Logo />}
            {showTitle && <TitleContainer toggleModal={function (): void {
                throw new Error("Function not implemented.");
            } } />}
            {showContent && <OurflixContent />}
            {showModal && <Modal />}
            {showMask && <Mask />}
        </StyledHome>
    )
}

export default Home;