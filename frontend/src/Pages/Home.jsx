import React from 'react';
import { JewellerysSlider } from './jewelleryhome/Slider';
import { JoyGift } from './jewelleryhome/Joygifting';
import { Ottomon } from './jewelleryhome/Ottomon';
import WireWork from './jewelleryhome/WireWork';
import SecondSlider from './jewelleryhome/SecondSlider';

function Home() {
  return (
    <div>
        <JewellerysSlider/>
        <JoyGift/>
        <Ottomon/>
        <SecondSlider/>
        <WireWork/>
    </div>
  )
}

export default Home