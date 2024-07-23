import styled from 'styled-components';
import { InnerDiv, OuterSec } from '../../components/standard'
import Title from '../../components/title'

const P = styled.p`
  font-weight: 300;
`;

const Welcome = () => {
  return (
    <OuterSec>
      <InnerDiv>
        <Title color="--green" text="Welkom!" />
        <P>
          Mercurius is dé studentenclub bij uitstek voor de studenten aan de HOGENT stadscampus Aalst. Bij ons voel je je meteen thuis door onze familiale, vriendschappelijke sfeer.<br/>
          Het doel van onze club is namelijk studenten uit allerlei verschillende richtingen samenbrengen in tal van studentikoze activiteiten en een hechte vriendengroep vormen.
        </P>
      </InnerDiv>
    </OuterSec>
  )
}

export default Welcome