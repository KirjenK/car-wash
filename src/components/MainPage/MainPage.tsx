import React from 'react';
import GiftBox from './GiftBox/GiftBox';
import LoyalityBox from './LoyalityBox/LoyalityBox';
import MainBox from './MainBox/MainBox';
import PriceBox from './PriceBox/PriceBox';
import WarnongBlock from './WarningBlock/WarnongBlock';
import YandexMap from './YandexMap/YandexMap';

export default function MainPage():JSX.Element {
  return (
    <>
     <MainBox />
      <PriceBox />
      <GiftBox />
      <LoyalityBox />
      <WarnongBlock />
      <YandexMap />
    </>
  );
}
