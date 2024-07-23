import React from "react"
import { EventType } from "../../context/models";
import { useContent } from "../../context/contentContext";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner";
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import dayjs from "dayjs";
import Buttons from "./buttons";
import Details from "./details";
import styled from "styled-components";
import { boxShadow } from "../../assets/styling";
import Helmet from "../../components/helmet";

const IFrame = styled.iframe`
  border: none;
  width: 100%;
  height: 20rem;
  ${boxShadow}
`;

const EvenementDetail = () => {
  const { initialized, initEvents, pastEvents, futureEvents } = useContent();
  const [event, setEvent] = React.useState<EventType | undefined>(undefined);
  const { eventUrl } = useParams();

  React.useEffect(() => {
    if (!initialized.events)
      initEvents();
  }, [initialized.events, initEvents]);

  React.useEffect(() => {
    setEvent([...pastEvents, ...futureEvents].find((v) => v.url === eventUrl))
  }, [eventUrl, pastEvents, futureEvents]);

  if (!event) return (<>loading</>)
  return (
    <>
      <Helmet title={`Mercurius Aalst | ${event.title} ${event.orderDate.slice(0, 4)}`} type="article" description={event.what} image={event.imageUrl} />
      <div>
        <Banner imgUrl={event.imageUrl} event />
        <OuterSec>
          <InnerDiv style={{ paddingTop: '1.5rem'}}>
            <Title color="--green" text={`${event.title} ${event.orderDate < dayjs().format('YYYY-MM-DD HH:mm') ? `(${event.orderDate.slice(0, 4)})` : ''}`} />
            <Details {...event} />
            <Buttons {...event} />
            {event.mapsUrl && <IFrame src={event.mapsUrl} loading="lazy" />}
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  )
}

export default EvenementDetail