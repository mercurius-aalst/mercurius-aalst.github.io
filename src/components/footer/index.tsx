import styled from "styled-components";
import SocialMedia from "../socialMedia"
import { InnerDiv, OuterSec } from "../standard"
// import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import Schild from "../schild";

const SOuterSec = styled(OuterSec)`
  background-color: var(--green);
`;

// const SIoIosArrowUp = styled(TbArrowBigUpLineFilled)`
//   font-size: 1.75rem;
// `;
// const TopBtn = styled.button`
//   background-color: var(--green);
//   color: var(--light-green);
//   width: 3rem;
//   height: 3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 100rem;
//   cursor: pointer;
//   transition: 0.2s all ease;
//   &:hover {
//     transform: translateY(-0.25rem);
//   }
// `;

const SInnerDiv = styled(InnerDiv)`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--white);
  text-align: center;
  padding: 7.5rem 0 2.5rem 0;
`;

// const Top = styled.div`
//   position: absolute;
//   top: calc(-5rem);
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: 0;
//   font-weight: 500;
//   gap: 0.25rem;

//   cursor: default;
// `;

const Links = styled.div`
  display: flex;
  gap: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
`;

const SLink = styled(Link)`
  position: absolute;
  top: -1.5rem;
  left: 0;
`;

// const Span = styled.span`
//   color: var(--green);
// `;
{/* <Top>
  <TopBtn onClick={() => window.scrollTo(0,0)}>
    <SIoIosArrowUp />
  </TopBtn>
  <Span>Naar boven</Span>
</Top> */}

const Footer = () => (
  <SOuterSec>
    <SInnerDiv>
      <SLink to='/'>
        <Schild colored height={120} />
      </SLink>
      <SocialMedia />
      <Links>
        <Link to=''>Home</Link>
        {/* <Link to='/lan'>LAN</Link> */}
        <Link to='/praesidium'>Praesidium</Link>
        <Link to='/geschiedenis'>Geschiedenis</Link>
        <Link to='/clublied'>Clublied</Link>
        <Link to='/evenementen'>Evenementen</Link>
      </Links>
      <div style={{ fontWeight: 300 }}>
        Copyright © 2024; Created by CookieBuilds
      </div>
    </SInnerDiv>
  </SOuterSec>
);

export default Footer