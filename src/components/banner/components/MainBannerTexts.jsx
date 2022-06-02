import {
  Center,
  Circle,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import Rating from './Rating';
import { FaPlay } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const MainBannerTexts = () => {
  return (
    <Stack w='100%' maxW='460px'>
      <Text>Duration: 58m</Text>
      <Rating />
      <HStack>
        <Text> Crime</Text> <Divider orientation='vertical' />
        <Text> Romance</Text> <Divider orientation='vertical' />
        <Text> Comedy</Text>
      </HStack>
      <Heading
        fontSize={['2rem', '3rem', '4rem']}
        fontWeight={500}
        fontFamily="'Courgette', cursive"
      >
        Redemption
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        vel cumque accusamus optio quidem! Vero aliquid blanditiis iusto.
        Explicabo nihil nemo aperiam, magnam architecto atque modi quod odio ad
        nisi.
      </Text>
      <HStack gap='2rem' py='5'>
        <Center px='4' borderRadius='6px' h='45px' bg='primary'>
          <FaPlay size={18} />
          <Text ml='10px'>Watch</Text>
        </Center>
        <Center h='45px' px='3' borderRadius='6px' bg='primary'>
          <AiOutlinePlus size={20} />
          <Text ml='5px'>Add to watch list</Text>
        </Center>
      </HStack>
    </Stack>
  );
};

export default MainBannerTexts;
