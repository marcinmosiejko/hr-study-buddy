import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    // To optimize, when element is unmounted, we remove event listener so we don't listen for resize event when we no longer need to
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return dimensions;
};
