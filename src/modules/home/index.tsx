import styled from "styled-components";
import Welcome from "./welcome";
import NextEvent from "./nextEvent";
import Partners from "./partners";
import Landing from "./landing";
import { useContent } from "../../context/contentContext";
import React from "react";
import Helmet from "../../components/helmet";

const HomeDiv = styled.div`
  position: relative;
  top: -8.25rem;
  width: 100%;
  margin-bottom: -7rem;
`;

const Home = () => {
  const { initialized, initEvents } = useContent();

  React.useEffect(() => {
    if (!initialized.events)
      initEvents();
  }, [initialized.events, initEvents]);

  return (
    <>
      <Helmet title="Mercurius Aalst" />
      <HomeDiv>
        <Landing />
        <Welcome />
        <NextEvent />
        <Partners />
      </HomeDiv>
    </>
  )
}

export default Home