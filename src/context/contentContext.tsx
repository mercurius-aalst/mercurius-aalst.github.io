/* eslint-disable react-refresh/only-export-components */
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
    const days = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
    const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    
    setLoading(true);
    
    const [dataEvents, dataArchive] = await Promise.all(['/assets/data/events.json', '/assets/data/archiveEvents.json'].map(async (v): Promise<EventType[]> => {
      const resp = await fetch(v);
      return resp.json();
    }))
    const now = new Date();
    const events = [...dataEvents, ...dataArchive].map(v => ({
      ...v,
      imageUrl: v.imageUrl || BASE_IMAGE,
      orderDate: new Date(v.orderDateString),
    })).map(v => ({
      ...v,
      when: v.when || `${days[v.orderDate.getDay()]} ${v.orderDate.getDate()} ${months[v.orderDate.getMonth()]} ${v.orderDate.getFullYear()} om ${v.orderDate.getHours()}:${v.orderDate.getMinutes() < 10 ? `0${v.orderDate.getMinutes()}` : v.orderDate.getMinutes()}`
    })).sort((a, b) => {
      return a.orderDate.getTime() - b.orderDate.getTime()
    });
    setFutureEvents(events.filter((v) => v.orderDate >= now));
    setPastEvents(events.filter((v) => v.orderDate < now).reverse());
    setInitialized({
      ...initialized,
      events: true,
    });
  }, [initialized]);

  const initTimeline = React.useCallback(async () => {
    setLoading(true);
    
    const response = await fetch(`/assets/data/timeline.json`);
    const data: TimelineJson[] = await response.json();
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