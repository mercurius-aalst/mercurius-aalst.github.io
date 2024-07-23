import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import styled from "styled-components";
import { boxShadow, transition } from "../../assets/styling";


const SMDiv = styled.div`
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: row;
  ${boxShadow}
`;

const SM = styled.a<{color: string}>`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.color};
  color: var(--white);
  ${transition}
`;

const SocialMedia = () => {
  return (
    <SMDiv>
      <SM color="#FF0000" href="mailto:mercuriusaalst.studentenclub@gmail.com"><MdOutlineEmail size='1.5rem' /></SM>
      <SM color="#8d8d8d" href="https://www.google.com/maps/place/HOGENT+campus+Aalst/@50.9373173,4.0307501,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3bd50b5a1d121:0x7a151c3b40f58c76!8m2!3d50.9373139!4d4.033325!16s%2Fg%2F1wk6yy8y?entry=ttu"><IoLocationSharp size='1.5rem' /></SM>
      <SM color="#F028D0" href="https://www.instagram.com/mercurius.aalst/"><FaInstagram size='1.5rem' /></SM>
      <SM color="#4080ED" href="https://www.facebook.com/groups/26262717221"><FaFacebookF size='1.5rem' /></SM>
      <SM color="#000000" href="https://www.tiktok.com/@mercurius.aalst"><FaTiktok size='1.5rem' /></SM>
    </SMDiv>
  )
}

export default SocialMedia