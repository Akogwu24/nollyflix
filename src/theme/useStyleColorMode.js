import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const useStyleColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const bg = useColorModeValue('red', 'blue');
  const color = useColorModeValue('black', 'white');
  return { toggleColorMode, bg, color, colorMode };
};

export default useStyleColorMode;
