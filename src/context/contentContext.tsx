/* eslint-disable react-refresh/only-export-components */
import dayjs from 'dayjs';
import React from 'react';
import { Content, EventType, PraesidiumMember, ProPraesidium, TimelineJson, TimelinePart } from './models';

const BASE_IMAGE = 'https://imgur.com/NhrMwiG.png'

export const ContentContext = React.createContext<Content>({} as Content);

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider = ({children}: { children: React.ReactNode}) => {
  const [futureEvents, setFutureEvents] = React.useState<EventType[]>([]);
  const [pastEvents, setPastEvents] = React.useState<EventType[]>([]);
  const [praesidium, setPraesidium] = React.useState<PraesidiumMember[]>([]);
  const [proPraesidia, setProPraesidia] = React.useState<ProPraesidium[]>([]);
  const [timeline, setTimeline] = React.useState<TimelinePart[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [initialized, setInitialized] = React.useState({
    praesidium: false,
    events: false,
    timeline: false,
  })

  const initPraesidium = React.useCallback(async () => {
    const response1 = await fetch(`/assets/data/praesidium.json`);
    const data1: PraesidiumMember[] = await response1.json();
    setPraesidium(data1);
    
    const response2 = await fetch(`/assets/data/propraesidia.json`);
    const data2: ProPraesidium[] = await response2.json();
    setProPraesidia(data2);

    setInitialized({
      ...initialized,
      praesidium: true,
    });
  }, [initialized]);

  const initEvents = React.useCallback(async () => {
    setLoading(true);
    
    const [dataEvents, dataArchive] = await Promise.all(['/assets/data/events.json', '/assets/data/archiveEvents.json'].map(async (v): Promise<EventType[]> => {
      const resp = await fetch(v);
      return resp.json();
    }))
    const now = dayjs().format('YYYY-MM-DD HH:mm');
    const events = [...dataEvents, ...dataArchive]
      .map(v => ({ ...v, imageUrl: v.imageUrl || BASE_IMAGE }))
      .sort((v1, v2) => v1.orderDate.localeCompare(v2.orderDate));
    const fe = events.filter((v) => v.orderDate >= now);
    const pe = events.filter((v) => v.orderDate < now).reverse();
    setFutureEvents(fe);
    setPastEvents(pe);

    setInitialized({
      ...initialized,
      events: true,
    });
  }, [initialized]);

  const initTimeline = React.useCallback(async () => {
    setLoading(true);
    
    const response = await fetch(`/assets/data/timeline.json`);
    const data: TimelineJson[] = await response.json();
    console.log(data);
    setTimeline(data.map((v) => ({
      title: v.date,
      cardTitle: v.date,
      cardDetailedText: v.text,
      url: v.link,
    })));

    setInitialized({
      ...initialized,
      timeline: true,
    });
  }, [initialized]);

  const value = React.useMemo(() => ({
    futureEvents,
    pastEvents,
    nextEvent: futureEvents[0],
    praesidium,
    proPraesidia,
    timeline,
    loading,
    initPraesidium,
    initEvents,
    initTimeline,
    initialized,
  }), [
    futureEvents,
    pastEvents,
    praesidium,
    proPraesidia,
    timeline,
    loading,
    initPraesidium,
    initEvents,
    initTimeline,
    initialized,
  ])

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
};