import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpeg';
import PraesImg from '/assets/images/praesidium.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import CurrentPraesidium from "./currentPraesidium";
import ProPraesidia from "./proPraesidia";
import NewModal from "./newModal";
import { useContent } from "../../context/contentContext";
import React from "react";
import Helmet from "../../components/helmet";

const Praesidium = () => {
  const { initialized, initPraesidium } = useContent();

  React.useEffect(() => {
    if (!initialized.praesidium)
      initPraesidium();
  }, [initialized.praesidium, initPraesidium]);

  return (
    <>
      <Helmet title="Mercurius Aalst | Praesidium" />
      <NewModal />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color="--white" text="Praesidium" />
            <div style={{ width: '100%' }}>
              <img src={PraesImg} style={{ width: '100%' }} />
            </div>
            <CurrentPraesidium />
          </InnerDiv>
        </OuterSec>
        <OuterSec $color='--light-green'>
          <InnerDiv $even={1}>
            <Title color="--green"  text="Pro-Praesidia" />
            <ProPraesidia />
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  );
}

export default Praesidium