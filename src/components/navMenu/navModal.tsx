import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQuery } from '../../assets/styling';

const SLink = styled(Link)<{ $active?: number }>`
  padding: 1rem;
  position: relative;
  font-size: 1.25rem;
  color: var(--green);
  background-color: ${p => p.$active ? 'var(--white)' : 'none'};
  font-weight: ${p => p.$active ? 500 : 300};
  width: 100%;

  &:hover {
    background-color: var(--light-green);
  }
`;

const NavModalDiv = styled.div<{open: number}>`
  display: flex;
  visibility: ${p => p.open ? 'visible' : 'hidden'};
  opacity: ${p => p.open ? '1' : '0'};
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  background-color: var(--light-green-transparent);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  ${mediaQuery.small`
    display: none;
  `}
  transition: visibility 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const InnerNavDiv = styled.div`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavModal = (props: {open: boolean, setOpenNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { pathname } = useLocation();

  return (
    <NavModalDiv open={+props.open}>
      <InnerNavDiv>
        {/* <SLink title='LAN' to='/lan' $active={+(pathname.includes('/lan'))}>LAN</SLink> */}
        <SLink title='Praesidium' to='/praesidium' $active={+(pathname.includes('/praesidium'))}>Praesidium</SLink>
        <SLink title='Geschiedenis' to='/geschiedenis' $active={+(pathname.includes('/geschiedenis'))}>Geschiedenis</SLink>
        <SLink title='Clublied' to='/clublied' $active={+(pathname.includes('/clublied'))}>Clublied</SLink>
        <SLink title='Events' to='/evenementen' $active={+(pathname.includes('/evenementen'))}>Evenementen</SLink>  
      </InnerNavDiv>
    </NavModalDiv>
  );
};

export default NavModal;