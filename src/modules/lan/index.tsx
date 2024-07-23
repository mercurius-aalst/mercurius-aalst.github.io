import styled from "styled-components";
import { boxShadow } from "../../assets/styling";
import Banner from "../../components/banner";
import Helmet from "../../components/helmet";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';
import Partners from "./partners";

const P = styled.p`
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  ${boxShadow}
`;

const SInnerDiv = styled(InnerDiv)`
  padding-top: 0;
`;

const Lan = () => {
  return (
    <>
      <Helmet title='Mercurius Aalst | LAN' />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color='--white' text='LAN-party' />
            <P>
              Ook dit jaar gaat onze befaamde LAN-party weer door op HOGENT campus Aalst.
              Zoals altijd kan je meedoen met één van onze leuke competities. Dit jaar staan Valorant, League of Legends, Super Smash Bros, Just Dance, Rocket League en uiteraard Beer Pong op het programma.
              Inschrijven hiervoor kan onderaan deze pagina.
              Ook worden er enkele fun compos georganiseerd, namelijk Beerio Kart, Trackmania...
            </P>
          </InnerDiv>
        </OuterSec>
        <OuterSec $color='--white'>
          <SInnerDiv>
            <Title color='--green' text='Sfeerbeelden' />
            <Carousel width='100%'>
              {[1, 2, 3, 4, 5].map(v => (
                <div>
                  <img src={`assets/images/lan/${v}.jpg`} />
                </div>
              ))}
            </Carousel>
          </SInnerDiv>
        </OuterSec>
        <Partners />
      </div>
    </>
  )
}

export default Lan;