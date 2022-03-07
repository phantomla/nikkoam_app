import {useEffect, useLayoutEffect, useState} from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {size, scrollPosition};
};

const useDeviceDetector = () => {
  const [deviceType, setDeviceType] = useState('');
  const size = useWindowSize();
  const isSp = deviceType === 'Mobile';
  const width = size[0];
  const height = size[1];

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent,
      ) ||
      width < 768
    ) {
      setDeviceType('Mobile');
    } else {
      setDeviceType('Desktop');
    }
  }, [size, width]);

  return {deviceType, isSp, width, height};
};

export default useDeviceDetector;
