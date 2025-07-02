import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpeg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Helmet from "../../components/helmet";
import React, { useEffect, useState } from "react";
import MercuriositiesList from "./MercuriositiesListStyled";

const Mercuriosity: React.FC = () => {
  const [curiosities, setCuriosities] = useState([]);

  useEffect(() => {
    fetch("/assets/data/mercuriosities.ts")
      .then((res) => res.text())
      .then((text) => {
        const match = text.match(/export const mercuriosityItems = (\[.*\]);/s);
        if (match) {
          const arr = eval(match[1]);
          setCuriosities(arr);
        }
      });
  }, []);

  return (
    <>
      <Helmet title="Mercurius Aalst | Mercuriosity" />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color="--white" text="Mercuriosity" />
            <MercuriositiesList curiosities={curiosities} />
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  );
};

export default Mercuriosity;
