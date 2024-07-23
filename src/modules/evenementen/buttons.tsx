import styled from "styled-components";
import { transition } from "../../assets/styling";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  margin: auto;
`;

const Button = styled.button`
  background-color: var(--green);
  color: var(--white);
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  width: 8rem;
  border-radius: 0.25rem;
  ${transition}

  &:disabled {
    background-color: var(--gray);
    color: var(--black);
    transform: none;
    cursor: default;
  }
`;

const Buttons = (props: {
  back: () => void;
  forward: () => void;
  minPage: boolean;
  maxPage: boolean;
}) => {
  return (
    <ButtonDiv>
      <Button onClick={props.back} disabled={props.minPage}>Vorige</Button>
      <Button onClick={props.forward} disabled={props.maxPage}>Volgende</Button>
    </ButtonDiv>
  )
}

export default Buttons