import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components"
import { useContent } from "../../context/contentContext";
import { PraesidiumMember } from "../../context/models";
import { IoClose } from "react-icons/io5";
import Title from '../../components/title';
import { mediaQuery } from "../../assets/styling";

const ModalDiv = styled.div<{$open: number}>`
  display: ${p => p.$open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00000080;
  z-index: 15000;
  ${mediaQuery.small`
    flex-direction: row;
  `}
`;
const InsideDiv = styled.div`
  background-color: white;
  margin: 2rem;
  max-width: 80rem;
  max-height: 40rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ${mediaQuery.small`
    flex-direction: row;
    overflow: hidden;
  `}
`;
const ImgDiv = styled.div`
  flex: 1 1 0;
  background-color: black;
  display: none;

  ${mediaQuery.small`
    flex-direction: row;
    overflow: hidden;
    display: block;
  `}
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  flex: 1 1 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Text = styled.h2`
  font-weight: 300;
`;
const H3 = styled.h3`
  font-weight: 600;
`;

const ImgText = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;
const TitleDiv = styled.div`
  display: flex;
  width: 100%;
`;

const NewModal = () => {
  const { praesidium } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const [member, setMember] = React.useState<PraesidiumMember | undefined>(undefined);

  const onEscape = React.useCallback((e: KeyboardEvent) => {
    if(e.key === 'Escape') setSearchParams({});
  }, [setSearchParams])

  React.useEffect(() => {
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    }
  }, [onEscape])

  React.useEffect(() => {
    if (!searchParams.get('functie')){
      setMember(undefined);
      document.body.style.overflow = 'unset';
    } else {
      setMember(praesidium.find(v => v.url === searchParams.get('functie')));
      document.body.style.overflow = 'hidden';
    }
  }, [praesidium, searchParams]);

/* eslint-disable */
  const onClose = React.useCallback((e: any) => {
    if (e.target === e.currentTarget)
      setSearchParams({});
  }, []);
  return (
    <ModalDiv $open={+(member !== undefined)} onClick={onClose}>
      {member && (
        <InsideDiv>
          <ImgDiv>
            <Img src={member.imageUrl} />
          </ImgDiv>
          <TextDiv>
            <div style={{ width: '100%'}}>
              <TitleDiv>
                <Title color='--green' text={member.function || ''} />
                <IoClose onClick={() => setSearchParams('')} style={{ cursor: 'pointer', marginLeft: 'auto' }} size='2rem' />
              </TitleDiv>
              <Text>{member.fName} {member.nName && <i>"{member.nName}"</i>} {member.lName}</Text>
            </div>
            <ImgText>
              {member.questions.map((v) => (
                <div key={v.q}>
                  <H3>{v.q}</H3>
                  <p>{v.a}</p>
                </div>
              ))}
              {(member.funFacts && member.funFacts.length > 0) && (
                <div>
                  <H3>Fun facts:</H3>
                  <div>
                    {member.funFacts.map((v) => <p>- {v}</p>)}
                  </div>
                </div>
              )}
            </ImgText>
          </TextDiv>
        </InsideDiv>
      )}
    </ModalDiv>
  )
}

export default NewModal