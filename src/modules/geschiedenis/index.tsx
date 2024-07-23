
import React from 'react';
import Banner from '../../components/banner';
import { useContent } from '../../context/contentContext';
import Emergence from './emergence';
import Timeline from './timeline';
import BannerImg from '/assets/images/landing-pic.jpg';
import Helmet from '../../components/helmet';

const Geschiedenis = () => {
  const { initialized, initTimeline } = useContent();

  React.useEffect(() => {
    if (!initialized.timeline)
      initTimeline();
  }, [initialized.timeline, initTimeline]);
  return (
    <>
      <Helmet title="Mercurius Aalst | Geschiedenis" />
      <div>
        <Banner imgUrl={BannerImg} />
        <Emergence />
        {initialized.timeline && <Timeline />}
      </div>
    </>
  )
};

export default Geschiedenis;