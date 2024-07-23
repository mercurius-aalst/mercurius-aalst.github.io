import styled from "styled-components";
import { boxShadow, mediaQuery, transition } from '../../assets/styling';
import { Link } from "react-router-dom";

export const ProPraesidiaDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  ${mediaQuery.extraSmall`
    flex-direction: row;
  `}
`;

export const Table = styled.table`
  display: block;
  background-color: var(--white);
  width: 100%;
  text-align: left;
  ${boxShadow}
  border-spacing: 0;
  max-height: 25rem;
  overflow-y: scroll;
  
  ${mediaQuery.extraSmall`
    max-width: 20rem;
  `}
`;

export const THead = styled.thead`
  background-color: var(--green);
  color: var(--white);
`;

export const TrHead = styled.tr`
  font-weight: 500;
`;

export const Th = styled.th`
  padding: 1rem 0.5rem;
  font-weight: 500;
`;

export const Td = styled.td`
  padding: 0.5rem;
`;

export const Tr = styled.tr<{$selected: number}>`
  cursor: pointer;
  background-color: var(--white);
  font-weight: ${p => p.$selected ? '500' : '300'};
  &:nth-child(even) {
    background-color: var(--gray);
  }

  &:hover {
    background-color: var(--light-green);
  }
`;

export const SelectedYear = styled.div`
  display: flex;
  background-color: white;
  flex: 1 1 0;
  ${boxShadow}
`;

export const MemberDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  ${boxShadow}
  max-width: 34rem;
  width: 100%;
  ${transition}
`;
export const ImgDiv = styled.div`
  width: 100%;
  height: 20rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
export const MTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const MText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const Praesidium = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  ${mediaQuery.extraSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${mediaQuery.medium`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const SYYear = styled.h3`
  margin-bottom: 1.25rem;
  font-weight: 400;
`;

export const SYImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;