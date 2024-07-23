import styled from 'styled-components';

import { mediaQuery } from '../../assets/styling';

export const OuterSec = styled.section<{ $color?: string }>`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => `var(${p.$color})` ?? 'transparent'};
  ${mediaQuery.medium`
  padding: 0 4rem;
  `}
`;

export const InnerDiv = styled.div<{$even?: number}>`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: ${p => p.$even ? 'end' : 'start'};
  justify-content: space-between;
  padding: 5rem 0rem;
  ${mediaQuery.small`
    max-width: 80rem;
    padding: 7.5rem 0rem;
  `}
`;