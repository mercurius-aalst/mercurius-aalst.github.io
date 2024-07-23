import styled from 'styled-components'

const BannerImgDiv = styled.div<{$url: string, $event: number}>`
  position: ${p => p.$event ? 'relative' : 'absolute'};
  width: 100%;
  height: ${p => p.$event ? '20rem' : '16rem'};
  background-image: url(${p => p.$url});
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: grayscale(80%);
`;

const Banner = (props: {imgUrl: string, event?: boolean}) => {
  return (
    <BannerImgDiv $url={props.imgUrl} $event={+(props.event || false)} />
  )
}

export default Banner