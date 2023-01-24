import Navbar from './components/Navbar/Navbar';
import MainBox from './components/MainBox/MainBox';
import PriceBox from './components/PriceBox/PriceBox';
import './app.css';
import GiftBox from './components/GiftBox/GiftBox';
import LoyalityBox from './components/LoyalityBox/LoyalityBox';
import WarnongBlock from './components/WarningBlock/WarnongBlock';

function App():JSX.Element {
  return (
    <>
      <Navbar />
      <MainBox />
      <PriceBox />
      <GiftBox />
      <LoyalityBox />
      <WarnongBlock />
    </>
  );
}

export default App;
