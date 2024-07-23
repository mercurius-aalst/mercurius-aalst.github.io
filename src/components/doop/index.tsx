import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { transition } from '../../assets/styling';

const DoopDiv = styled(Link)<{$show: number}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  color: var(--white);
  height: ${p => p.$show ? '2.5rem' : '0'};
  overflow: hidden;
  text-decoration: none;
  font-weight: 300;
  z-index: 10000;
  ${transition}
`;

const Doop = (props: { $show: boolean }) => {
  return (
    <DoopDiv to='/doop' $show={+(props.$show)}>
      Meer weten over onze doop?&nbsp; <b>Klik&nbsp;hier</b>
    </DoopDiv>
  )
}

export default Doop