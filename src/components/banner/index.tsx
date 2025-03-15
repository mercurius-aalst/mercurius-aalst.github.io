import styled from 'styled-components'

const BannerImgDiv = styled.div<{$url: string, $event: number}>`
  position: ${p => p.$event ? 'relative' : 'absolute'};
  width: 100%;
  height: ${p => p.$event ? '20rem' : '16rem'};
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%), url(${p => p.$url}) lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: 50% 15%;
  z-index: -1;
`;

const Banner = (props: {imgUrl: string, event?: boolean}) => {
  return (
    <BannerImgDiv $url={props.imgUrl} $event={+(props.event || false)} />
  )
}

export default Banner