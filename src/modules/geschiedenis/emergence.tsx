import styled from 'styled-components';
import { InnerDiv, OuterSec } from '../../components/standard';
import Title from '../../components/title';
import { boxShadow } from '../../assets/styling';

const P = styled.p`
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  ${boxShadow}
`;

const Emergence = () => {
  return (
    <OuterSec>
      <InnerDiv>
        <Title color='--white' text='Geschiedenis' />
        <P>
          Het in 1948 ontstane Mercurius is de oudste nog bestaande studentenclub van Aalst. In de pas opgerichte Rijkshogere Handelsschool werd door toenmalig directeur Reychler Studentenbond Mercurius boven de doopvont gehouden. Er werd onder andere toneel gespeeld en een bibliotheek beheerd. Er was ook het studentenblad Kwik. Het is duidelijk dat er sindsdien veel veranderd is. In de vijfenzeventig jarige geschiedenis heeft de club tweemaal een onderbreking gekend van enkele jaren.<br/><br/>
          De laatste heroprichting dateert van 1986 toen Peter Van Accolyen de club opnieuw leven in blies. Lange tijd is, zoals te horen in ons clublied, het Kastanjehof het clublokaal geweest. In 'den Hof' stonden Yvette en Mark achter den toog. Deze zijn sinds 2015 met pensioen, maar blijven voor eeuwig de Meter en Peter van onze club. Momenteel kunnen de (glazen) boterhammen genuttigd worden in de Zeppelin.
        </P>
      </InnerDiv>
    </OuterSec>
  )
}

export default Emergence