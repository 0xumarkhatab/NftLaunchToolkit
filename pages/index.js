import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
const Home = () => {
  return (
    <Box className='app'  >
      <Navbar />
      <Introduction />
    </Box>
  );
};


export default Home;
