import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Events from "./events";
import { useContent } from "../../context/contentContext";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { EventFilter, EventType } from "../../context/models";
import Filter from "./filter";
import Buttons from "./buttons";
import Helmet from "../../components/helmet";

const Evenementen = () => {
  const { futureEvents, pastEvents, initialized, initEvents } = useContent();
  const [filteredEvents, setFilteredEvents] = React.useState<EventType[]>([]);
  const [page, setPage] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<EventFilter>({
    onlyPictures: searchParams.get('only-pictures') === '1',
    search: searchParams.get('search') || '',
  });

  React.useEffect(() => {
    if (!initialized.events)
      initEvents();
  }, [initialized.events, initEvents]);

  const onChangeS = React.useCallback((newVal: string) => setFilter({ onlyPictures: filter.onlyPictures, search: newVal}), [filter.onlyPictures])
  const onChangeOP = React.useCallback((newVal: boolean) => setFilter({ onlyPictures: newVal, search: filter.search}), [filter.search]);

  // Filter events
  React.useEffect(() => {
    setSearchParams({
      ...(filter.search.length === 0 ? {} : {'search': filter.search.toLowerCase()}),
      ...(filter.onlyPictures ? {'only-pictures': '1'} : {}),
    });
    setFilteredEvents(pastEvents.filter(v => {
      if (filter.onlyPictures && !v.picturesUrl) return false;
      if (filter.search.length > 0) {
        return v.title.toLowerCase().includes(filter.search.toLowerCase()) || v.orderDate.startsWith(filter.search.toLowerCase())
      }
      return true;
    }));
    setPage(0);
  }, [pastEvents, filter, setSearchParams])

  // Preload images
  React.useEffect(() => {
    try {
      const imagesToPreload: (string | undefined)[] = [
        ...futureEvents.map((v) => v.imageUrl)
      ];
      
      Promise.all(imagesToPreload.map((url) => new Promise(function (resolve, reject) {
        if (!url) return;
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      }))).then(() => setLoading(false));
      
    } catch (err) {
      console.error(err);
    }
  }, [futureEvents]);

  const setCurrPage = React.useCallback((newPage: number) => { // length: 10, page: 3
    if (newPage < 0 || newPage >= Math.ceil(filteredEvents.length / 4))
      return;
    setPage(newPage);
  }, [filteredEvents.length]);

  return (
    <>
      <Helmet title="Mercurius Aalst | Evenementen" />
      <div>
        <Banner imgUrl={BannerImg} />
        {loading ? (
          <p style={{ color: 'var(--white)', fontWeight: '300' }}>Evenementen laden...</p>
        ) : (
          <>
            <OuterSec>
              <InnerDiv>
                <Title color="--white" text="Komende evenementen" />
                <Events events={futureEvents} noEventsColor="--white" />
              </InnerDiv>
            </OuterSec>
            <OuterSec>
              <InnerDiv style={{paddingTop: '0'}}>
                <Filter onChangeOP={onChangeOP} onChangeS={onChangeS} filter={filter} />
                {filteredEvents.length > 4 && <Buttons back={() => setCurrPage(page-1)} forward={() => setCurrPage(page+1)} minPage={page === 0} maxPage={page === Math.ceil(filteredEvents.length / 4)-1} />}
                <Events events={filteredEvents.slice(page*4, (page+1)*4)} noEventsColor="--black" />
                {filteredEvents.length > 4 && <Buttons back={() => setCurrPage(page-1)} forward={() => setCurrPage(page+1)} minPage={page === 0} maxPage={page === Math.ceil(filteredEvents.length / 4)-1} />}
              </InnerDiv>
            </OuterSec>
          </>
        )}
      </div>
    </>
  )
}

export default Evenementen
