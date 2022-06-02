import { Flex } from '@chakra-ui/react';
import MainBannerTexts from './components/MainBannerTexts';

const Banner = () => {
  return (
    <Flex h='80vh' align='center' w='100%'>
      <MainBannerTexts />
    </Flex>
  );
};

export default Banner;
