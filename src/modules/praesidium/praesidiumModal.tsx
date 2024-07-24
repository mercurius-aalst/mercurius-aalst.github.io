import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { PraesidiumMember } from '../../context/models';
import { useContent } from '../../context/contentContext';
import { IoClose } from "react-icons/io5";
import Title from '../../components/title';

const ModalDiv = styled.div<{$open: number}>`
  position: fixed;
  width: 100vw;
  height: 100vw;
  background-color: #00000080;
  z-index: 15000;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  max-height: 50rem;
  max-width: 100rem;
  background-color: var(--white);
`;
const Text = styled.h2`
  font-weight: 300;
`;
const Img = styled.img`
  width: 100%;
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
  border-top: 1px gray solid;
`;

const PraesidiumModal = () => {
  const { praesidium } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const [member, setMember] = React.useState<PraesidiumMember | undefined>(undefined);

  React.useEffect(() => {
    if (!searchParams.get('functie')) return;
    setMember(praesidium.find((v) => v.url === searchParams.get('functie')))
  }, [praesidium, searchParams])
  return (
    <ModalDiv $open={+(searchParams.get('functie') === null)}>
      {member && (
        <InsideDiv>
          <IoClose onClick={() => setSearchParams('')} style={{ cursor: 'pointer' }} size='2rem' />
          <div>
            <Title color='--green' text={member.function || ''} />
            <Text>{member.fName} {member.nName && <i>"{member.nName}"</i>} {member.lName}</Text>
          </div>
          <ImgText>
            <Img src={member.imageUrl} />
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
        </InsideDiv>
      )}
    </ModalDiv>
  )
}

export default PraesidiumModal