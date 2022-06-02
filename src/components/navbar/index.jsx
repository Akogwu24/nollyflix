import { Box, Flex, HStack } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import useStyleColorMode from '../../theme/useStyleColorMode';
import useMobileSreen from '../../utils/useMobileSreen';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useStyleColorMode();
  const { mobileScreen } = useMobileSreen();

  console.log({ colorMode, mobileScreen });
  return (
    <Flex as='header' py='5' className='header'>
      <Box fontSize='2rem' fontFamily='Sedgwick Ave Display'>
        NOLLYFLIX
      </Box>
      <HStack>
        {mobileScreen ? <MobileNav /> : <DesktopNav />}
        <Flex w='4rem' justify='flex-end'>
          {colorMode === 'dark' ? (
            <FaSun size={20} cursor='pointer' onClick={toggleColorMode} />
          ) : (
            <BsFillMoonStarsFill
              size={20}
              cursor='pointer'
              onClick={toggleColorMode}
            />
          )}
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
