import styled from 'styled-components';
import { EventType } from '../../context/models';
import Event from './event';
import { mediaQuery } from '../../assets/styling';

const EventsDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  ${mediaQuery.extraSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const P = styled.p<{$color: string}>`
  color: var(${p => p.$color});
  font-weight: 300;
  padding: 2rem 0;
`;

const Events = (props: { events: EventType[], noEventsColor: string }) => {

  if (props.events.length === 0) return (
    <P $color={props.noEventsColor}>Geen evenementen te vinden.</P>
  )

  return (
    <EventsDiv>
      {props.events.map((v) => <Event key={`${v.title} ${v.orderDateString}`} {...v} />)}
    </EventsDiv>
  )
}

export default Events