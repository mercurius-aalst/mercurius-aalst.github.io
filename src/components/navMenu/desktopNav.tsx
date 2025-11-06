import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQuery } from '../../assets/styling';
import React from 'react';


const LinkDiv = styled.div`
  display: none;
  align-items: center;
  ${mediaQuery.small`
    display: flex;
  `}
`;

const SLink = styled(Link)<{ $active?: number, $isHome?: number }>`
  padding: 1rem 1.5rem;
  position: relative;
  font-weight: ${p => p.$active ? 500 : 300};
  text-align: center;
  transition: 0.2s ease;
  ${p => p.$isHome ? 'text-shadow: 0px 0px 2px var(--black);' : ''}
  &:hover {
    background-color: ${p => p.$isHome ? '#FFFFFF20' : 'var(--light-green)'};
  }

  &:before {
    display: block;
    content: attr(title);
    font-weight: 500;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${p => (p.$active && !p.$isHome) ? '3px' : '0px'};
    background-color: var(--green);
    border-radius: 1px;
    transition: ${p => p.$isHome ? 'none' : '0.2s ease'};
  }
`;

const DesktopNav = () => {
  const { pathname } = useLocation();
  const isHome = React.useMemo(() => pathname === '/', [pathname]);

  return (
    <LinkDiv>
      <SLink title='Praesidium' to='/praesidium' $active={+(pathname.includes('/praesidium'))} $isHome={+isHome}>Praesidium</SLink>
      <SLink title='Geschiedenis' to='/geschiedenis' $active={+(pathname.includes('/geschiedenis'))} $isHome={+isHome}>Geschiedenis</SLink>
      <SLink title='Clublied' to='/clublied' $active={+(pathname.includes('/clublied'))} $isHome={+isHome}>Clublied</SLink>
      <SLink title='Evenementen' to='/evenementen' $active={+(pathname.includes('/evenementen'))} $isHome={+isHome}>Evenementen</SLink>
      <SLink title='Mercuriosity' to='/mercuriosity' $active={+(pathname.includes('/mercuriosity'))} $isHome={+isHome}>Mercuriosity</SLink>
      <SLink as="a" href="https://lan.mercurius-aalst.be" target="_blank" rel="noopener noreferrer" title="LAN" $isHome={+isHome}>LAN</SLink>
    </LinkDiv>
  );
};

export default DesktopNav;