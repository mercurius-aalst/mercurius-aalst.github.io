import styled from 'styled-components'
import { EventType } from '../../context/models'
import { Link } from 'react-router-dom';
import { BsImages } from 'react-icons/bs';
import { boxShadow, transition } from '../../assets/styling';
import { ImImage } from 'react-icons/im';

const EventDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${boxShadow}
  ${transition}
`;

const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  padding-top: 52.34%;
  flex: 1 1 0;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const MTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
const MText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  flex: 1 1 0;
`;
const SBsImages = styled(BsImages)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--white);
  padding: 0.25rem;
  ${boxShadow}
  border-radius: 0.25rem;
  color: var(--green);
  cursor: pointer;
`;
const BottomDesc = styled.div`
  display: flex;
  width: 100%;
`;

const Event = (props: EventType) => {
  return (
    <EventDiv to={`/evenementen/${props.url}`}>
      <ImgDiv>
        {props.picturesUrl && <SBsImages size='2.5rem' />}
        <Img src={props.imageUrl} />
      </ImgDiv>
      <TextDiv>
        <MTitle>{props.title}</MTitle>
        <BottomDesc>
          <MText>{props.when}</MText>
          {props.picturesUrl && <ImImage color='var(--green)' size='1.5rem' />}
        </BottomDesc>
      </TextDiv>
    </EventDiv>
  )
}

export default Event