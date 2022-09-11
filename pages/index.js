import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
const Home = () => {
  return (
    <Box className='app'  background={`url("./intro_bg.png")`} backgroundSize="cover">
      <Navbar />
    </Box>
  );
};


export default Home;
