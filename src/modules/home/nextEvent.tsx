import styled from 'styled-components';
import { InnerDiv, OuterSec } from '../../components/standard';
import Title from '../../components/title';
import { Link } from 'react-router-dom';
import { useContent } from '../../context/contentContext';
import { boxShadow, mediaQuery, transition } from '../../assets/styling';

const Event = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  ${boxShadow}
  ${mediaQuery.small`
    flex-direction: row;
  `}
`;
const ImgDiv = styled.div`
  flex: 1 1 0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  padding: 1rem;
  gap: 1rem;
  align-items: flex-end;
`;
const Text = styled.p`
  width: 100%;
  font-weight: 300;
  flex: 1 1 0;
`;
const Btn = styled(Link)`
  background-color: var(--green);
  color: var(--white);
  width: fit-content;
  padding: 0.5rem 1rem;
  font-weight: 500;
  ${transition}
`;
const EventTitle = styled.h2`
  font-weight: 600;
  width: 100%;
`

const NextEvent = () => {
  const { nextEvent } = useContent();

  return (
    <OuterSec style={{backgroundColor: 'var(--light-green)'}}>
      <InnerDiv $even={1}>
        <Title color="--green" text="Volgende activiteit" />
        { nextEvent ? (
          <Event>
          <ImgDiv>
            <Img src={nextEvent.imageUrl} />
          </ImgDiv>
          <TextDiv>
            <EventTitle>{nextEvent.title}</EventTitle>
            <Text dangerouslySetInnerHTML={{ __html: nextEvent.what }}/>
            <Btn to={`/evenementen/${nextEvent.url}`}>Meer informatie</Btn>
          </TextDiv>
        </Event>
        ) : (
          <Text style={{ textAlign: 'right' }}>Er zijn momenteel geen geplande evenementen</Text>
        )}
        
      </InnerDiv>
    </OuterSec>
  )
}

export default NextEvent