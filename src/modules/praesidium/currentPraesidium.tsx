import React from 'react';
import { useContent } from '../../context/contentContext';
import { Praesidium } from './styles';
import { Member } from './member';

const CurrentPraesidium = () => {
  const { praesidium } = useContent();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const imagesToPreload: string[] = [...praesidium.map((v) => v.imageUrl as string)];
      Promise.all(imagesToPreload.map((url) => new Promise(function (resolve, reject) {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      }))).then(() => setLoading(false));
      
    } catch (err) {
      console.error(err);
    }
  }, [praesidium]);

  if (praesidium.length === 0) return <></>;

  return (
    <Praesidium>
      {loading ? (
        <p style={{ color: 'var(--white)', fontWeight: '300' }}>Praesidium laden...</p>
      ) : (
        praesidium.map((v) => <Member key={`${v.fName};${v.lName}`} {...v} />)
      )}
    </Praesidium>
  )
}

export default CurrentPraesidium