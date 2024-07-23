import { Chrono } from 'react-chrono';
import './timelineCss.css';
import { InnerDiv, OuterSec } from '../../components/standard';
import Title from '../../components/title';
import styled from 'styled-components';
import { useContent } from '../../context/contentContext';

const TimelineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.5rem;
  padding-bottom: 7.5rem;
`;
const SInnerDiv = styled(InnerDiv)`
  padding: 0;
`;

const Timeline = () => {
  const { timeline } = useContent();
  return (
    <TimelineDiv>
      <OuterSec>
        <SInnerDiv>
          <Title color='--green' text='Tijdslijn' />
        </SInnerDiv>
      </OuterSec>
      <Chrono
        allowDynamicUpdate
        theme={{
          primary: "var(--green)",
          secondary: "var(--light-green)",
          cardBgColor: "var(--light-green)",
          titleColor: "var(--black)",
          cardTitleColor: "var(--green)",
          titleColorActive: "var(--black)",
        }}
        items={timeline}
        itemWidth={200}
        mode="HORIZONTAL"
      >
      </Chrono>
    </TimelineDiv>
  )
}

export default Timeline