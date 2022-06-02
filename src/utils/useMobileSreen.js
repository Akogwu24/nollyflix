import { useMediaQuery } from '@chakra-ui/react';

const useMobileSreen = () => {
  const [mobileScreen] = useMediaQuery('(max-width: 640px)');

  return { mobileScreen };
};

export default useMobileSreen;
