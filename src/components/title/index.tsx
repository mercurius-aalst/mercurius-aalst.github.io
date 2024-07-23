import styled from "styled-components"

const TitleDiv = styled.div<{$color: string; $fullWidth: number}>`
  color: var(${p => p.$color});
  font-weight: 600;
  font-size: 2rem;
  ${p => p.$fullWidth ? 'width: 100%;' : ''}
`;

const Title = (props: {text: string, color: string, fullWidth?: boolean}) => {
  return (
    <TitleDiv $color={props.color} $fullWidth={+(props.fullWidth || false)}>{props.text}</TitleDiv>
  )
}

export default Title