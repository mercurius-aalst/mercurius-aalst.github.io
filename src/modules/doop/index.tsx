import styled from "styled-components";
import Banner from "../../components/banner";
import Helmet from "../../components/helmet"
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import BannerImg from '/assets/images/landing-pic.jpeg';
import { boxShadow } from "../../assets/styling";
import { Carousel } from "react-responsive-carousel";
import './carousel.css';

const P = styled.p`
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  ${boxShadow}
`;

const SInnerDiv = styled(InnerDiv)`
  padding-top: 0;
`;

const Doop = () => {
  return (
    <>
      <Helmet title='Mercurius Aalst | Doop' />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color='--white' text='Doop' />
            <P>
              Hier moet dan uiteindelijk, zoals op de LAN pagina een tekstje komen met uitleg hoe onze doop ineen zit.
            </P>
          </InnerDiv>
        </OuterSec>
        <OuterSec>
          <SInnerDiv>
            <Title color="--green" text="Sfeerbeelden" />
            <Carousel width='100%'>
              {[1, 2, 3, 4, 5].map(v => (
                <div>
                  <img src={`assets/images/doop/${v}.jpg`} />
                </div>
              ))}
            </Carousel>
          </SInnerDiv>
        </OuterSec>
      </div>
    </>
  )
}

export default Doop;