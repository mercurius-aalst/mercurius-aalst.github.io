import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import NavModal from './navModal';
import { InnerDiv, OuterSec } from '../standard';
import Schild from '../schild';
import { mediaQuery, transition } from '../../assets/styling';

const SHeader = styled(OuterSec)<{ $isHome: number, $isOpen: number }>`
  position: static;
  top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${p => p.$isHome ? (p.$isOpen ? 'transparent' : '#00000040') : 'var(--white)'};
  color: ${p => p.$isHome ? 'var(--white)' : 'var(--green)'};
  padding: 1rem;
  box-shadow: ${p => p.$isHome ? 'none' : '0px 4px 4px 0px rgba(0,0,0,0.2)'};
  z-index: 10000;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  ${mediaQuery.medium`
    padding: 1rem 4rem;
  `};
`;

const SInnerDiv = styled(InnerDiv)`
  padding: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SLink = styled(Link)`
  padding: 0;
  height: 100px;
  ${transition}
`;

const NavMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => setOpenNav(false), [pathname])

  React.useEffect(() => {
    if (openNav)
      document.body.style.overflow = 'hidden';
    else
      document.body.style.overflow = '';
  }, [openNav]);
  return (
    <>
      <SHeader $isOpen={+(openNav)} $isHome={+(pathname === '/' || pathname === '/test-home')}>
        <SInnerDiv>
          <SLink to='/'>
            <Schild colored={pathname !== '/' || openNav} color={openNav ? '#217226': 'var(--white)'} height={100} />
          </SLink>
          <DesktopNav />
          <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
        </SInnerDiv>
      </SHeader>
      <NavModal open={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default NavMenu;