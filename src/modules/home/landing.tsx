import styled, { keyframes } from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import { mediaQuery } from '../../assets/styling';
import { GoChevronDown } from "react-icons/go";

const slideInS = keyframes`
  0% {
    bottom: 8.5rem;
    opacity: 0;
    font-size: 0.95em;
  }

  100% {
    bottom: 8rem;
    opacity: 1;
    font-size: 1em;
  }
`;

const slideInD = keyframes`
  0% {
    bottom: 1.5rem;
    opacity: 0;
    font-size: 0.8em;
  }

  100% {
    bottom: 0rem;
    opacity: 1;
    font-size: 1em;
  }
`;

const Div = styled.div<{$img: string}>`
  color: var(--white);
  position: relative;
  height: calc(100vh - 0rem); // -2.5rem
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
  line-height: 2.5rem;
  font-size: 2.5rem;
  
  ${mediaQuery.extraSmall`
    line-height: 4rem;
    font-size: 4rem;
  `}

  ${mediaQuery.medium`
    line-height: 6rem;
    font-size: 6rem;
  `}
`;

const Span = styled.div`
  position: absolute;
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  bottom: 8rem;
  width: 100vw;
  text-align: center;
  user-select: none;
  opacity: 0;
  animation: ${slideInS} 1.5s ease-out 0.5s forwards;
  padding: 0 1rem;
`;

const Down = styled(GoChevronDown)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0rem;
  animation: ${slideInD} 1.5s ease-out 0.5s forwards;
  opacity: 0;
  cursor: pointer;
`;

const Landing = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight - 100,
      behavior: 'smooth'
    });
  }

  return (
    <Div $img={LandingPic}>
      <Span>Studentenclub Mercurius</Span>
      <Down onClick={scrollDown} />
    </Div>
  )
}

export default Landing