import styled from "styled-components";
import { EventType } from '../../context/models'
import { mediaQuery } from "../../assets/styling";

const DetailsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mediaQuery.small`
    flex-direction: row;
  `}
`;

const DetailsPart = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DTitle = styled.h3`
  font-weight: 500;
`;
const DText = styled.p`
  font-weight: 300;
`;

const Details = (props: EventType) => {
  return (
    <DetailsDiv>
      <DetailsPart>
        { props.tldr && (
          <div>
            <DTitle>TL;DR</DTitle>
            <DText>{props.tldr}</DText>
          </div>
        )}
        { props.what && (
        <div>
          <DTitle>Wat?</DTitle>
          <DText dangerouslySetInnerHTML={{ __html: props.what }}></DText>
        </div>
        )}
      </DetailsPart>
      <DetailsPart>
        { props.when && (
        <div>
          <DTitle>Wanneer?</DTitle>
          <DText>{props.when}</DText>
        </div>
        )}
        { props.where && (
        <div>
          <DTitle>Waar?</DTitle>
          <DText>{props.where}</DText>
        </div>
        )}
        { props.who && (
        <div>
          <DTitle>Voor wie?</DTitle>
          <DText>{props.who}</DText>
        </div>
        )}
        { props.price && (
        <div>
          <DTitle>Prijs?</DTitle>
          <DText>{props.price}</DText>
        </div>
        )}
      </DetailsPart>
    </DetailsDiv>
  )
}

export default Details