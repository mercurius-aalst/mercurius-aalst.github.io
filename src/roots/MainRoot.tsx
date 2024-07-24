import React from 'react'
import { Outlet, /*useLocation*/ } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
// import Doop from '../components/doop';
import NavMenu from '../components/navMenu';
import { useContent } from '../context/contentContext';
import Footer from '../components/footer';

const Site = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const LoaderDiv = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  align-items: center;
  background-color: #111111;
`;

const l14 = keyframes`
  100% {left: calc(100% + 20px)}
`
const Loader = styled.div`
  width: 120px;
  height: 22px;
  border-radius: 40px;
  color: var(--white);
  border: 2px solid;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    margin: 2px;
    width: 14px;
    top: 0;
    bottom: 0;
    left: -20px;
    border-radius: inherit;
    background: currentColor;
    box-shadow: -10px 0 12px 3px currentColor;
    clip-path: polygon(0 5%, 100% 0,100% 100%,0 95%,-30px 50%);
    animation: ${l14} 1s infinite linear;
  }
`;

// const OutletDiv = styled.div`
//   flex: 1 1 0;
// `;

const MainRoot = () => {
  const content = useContent();
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  // const { pathname } = useLocation();
  const cssVariables = {
    '--black': '#000000',
    '--white': '#FFFFFF',
    '--gray': '#EEEEEE',
    '--light-green': '#E9F5EA',
    '--light-green-transparent': '#E9F5EAE0',
    '--green': '#217226',
    '--g-btn': '#33A552',
    '--b-btn': '#4080ED',
    '--y-btn': '#F1B708',
  } as React.CSSProperties;

  React.useEffect(() => {
    try {
      const imagesToPreload: string[] = [
        '/assets/images/landing-pic.jpg'
      ]
      Promise.all(imagesToPreload.map((url) => new Promise(function (resolve, reject) {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      }))).then(() => setImagesLoaded(true));
      
    } catch (err) {
      console.error(err);
    }
  }, [])

  if (!imagesLoaded && !content.loading) return (
    <Site style={cssVariables}>
      <LoaderDiv>
        <Loader/>
      </LoaderDiv>
    </Site>
  )

  return (
    <Site style={cssVariables}>
      {/* <Doop $show={!pathname.includes('doop')} /> */}
      <NavMenu />
      <Outlet/>
      <Footer />
    </Site>
  )
}

export default MainRoot