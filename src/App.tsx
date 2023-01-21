import Navbar from './components/Navbar/Navbar';
import MainBox from './components/MainBox/MainBox';
import PriceBox from './components/PriceBox/PriceBox';
import './app.css';
import GiftBox from './components/GiftBox/GiftBox';

function App():JSX.Element {
  return (
    <>
      <Navbar />
      <MainBox />
      <PriceBox />
      <GiftBox />
    </>
  );
}

export default App;
