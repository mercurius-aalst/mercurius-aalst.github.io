import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EventType } from '../../context/models';
import dayjs from 'dayjs';
import { transition } from '../../assets/styling';

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: flex-end;
`;
const Button = styled(Link)<{$color: string}>`
  background-color: var(${p => p.$color});
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--white);
  padding: 0.5rem 0.75rem;
  ${transition}
`;

const Buttons = (props: EventType) => {
  if (!props.registerUrl && !props.facebookUrl && !props.picturesUrl ) return <></>;
  return (
    <ButtonDiv>
      {(props.registerUrl && props.orderDateString > dayjs().format('YYYY-MM-DD HH:mm')) && <Button to={props.registerUrl} $color="--g-btn">Inschrijven</Button>}
      {props.picturesUrl && <Button to={props.picturesUrl} $color="--y-btn">Foto's</Button>}
      {props.facebookUrl && <Button to={props.facebookUrl} $color="--b-btn">Facebook-evenement</Button>}
    </ButtonDiv>
  )
}

export default Buttons