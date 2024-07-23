import { PraesidiumMember } from '../../context/models';
import { Img, ImgDiv, MText, MTitle, MemberDiv, TextDiv } from './styles';

export const Member = (props: PraesidiumMember) => (
  <MemberDiv to={`/praesidium?functie=${props.url}`}>
    <ImgDiv>
      <Img src={props.imageUrl} />
    </ImgDiv>
    <TextDiv>
      <MTitle>{props.function}</MTitle>
      <MText>{props.fName} {props.nName && <i>"{props.nName}"</i>} {props.lName}</MText>
    </TextDiv>
  </MemberDiv>
)