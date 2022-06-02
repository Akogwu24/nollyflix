import { Box } from '@chakra-ui/react';
import './App.css';
import Banner from './components/banner';
import Navbar from './components/navbar';

// function StyleColorMode() {
//   const { toggleColorMode } = useColorMode()

//   const bg = useColorModeValue('red', 'blue')
//   const color = useColorModeValue('black', 'white')

//   return (
//     <>
//       <Box mb={4} bg={bg} color={color}>
//         This box's style will change based on the color mode.
//       </Box>
//       <Button size='sm' onClick={toggleColorMode}>
//         Toggle Mode
//       </Button>
//     </>
//   )
//   }

function App() {
  return (
    <Box maxW={['95%', '80%', '75%']} mx='auto' minH='100vh'>
      <Navbar />
      <Banner />
    </Box>
  );
}

export default App;
