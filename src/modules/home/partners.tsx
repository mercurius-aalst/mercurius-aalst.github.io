import styled, { keyframes } from 'styled-components';
import { InnerDiv, OuterSec } from '../../components/standard';
import Title from '../../components/title';
import { Link } from 'react-router-dom';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const PartnerScroll = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  &:before,
	&:after {
		background: linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 5rem;
		z-index: 2;
	}
	
	&:after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&:before {
		left: 0;
		top: 0;
	}
`;
const PartnersDiv = styled.div`
  display: flex;
  width: calc(18rem * 10);
  animation: ${scroll} 30s linear infinite;
  display: flex;
`;
const Partner = styled(Link)`
  flex: 1 1 0;
  height: 8rem;
  width: 18rem;
`;
const Img = styled.img`
  height: 8rem;
  width: 18rem;
  object-fit: contain;
`;

const Partners = () => {
  const partners: { to: string, imgSrc: string }[] = [
    {
      imgSrc: '/assets/images/logos/hogent.png',
      to: 'https://www.hogent.be/dit-is-hogent/campussen/aalst/',
    },
    {
      imgSrc: '/assets/images/logos/zeppelin.png',
      to: 'https://www.zeppelin-aalst.be/',
    },
  ];

  return (
    <OuterSec>
      <InnerDiv>
        <Title color="--green" text="Partners" />
        <PartnerScroll>
          <PartnersDiv>
            {[0, 1, 3, 4].map(() => partners.map(v => (
              <Partner to={v.to}>
                <Img src={v.imgSrc} />
              </Partner>
            )))}
          </PartnersDiv>
        </PartnerScroll>
      </InnerDiv>
    </OuterSec>
  )
}

export default Partners