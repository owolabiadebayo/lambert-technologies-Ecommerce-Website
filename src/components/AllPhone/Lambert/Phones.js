import React from 'react';

import './Phones.css';
import Phone1 from '../Phone1/Phone1';
import Gadget from './Gadget.jpg';
import Earbud from './Earpud.jpg';
import Iphone from './Iphones.jpg';
import Samsung from './Samsung.jpg';
import Access from './Access.jpg';


const Phones = () => {
  return (
    <div className="phone">
      {/* <AllShoes_Navbar 
        title="Phones's"
        pathGym="/men/gym"
        pathJordan="/men/jordan"
        pathWalking="/men/walking"
        pathFootball="/men/football"
        pathAthletics="/men/athletics"
        pathBasketball="/men/basketball"
      />
      <div className="men__shoes">
        hi
      </div> */}
      .
      <div className="phone__categories">
        <Phone1 
          title="Apple Iphones"
          image={Iphone}
          pathTo="/Lambert/phone"
        />
        <Phone1 
          title="Samsung Phone"
          image={Samsung}
          pathTo="/Lambert/phone"
        />
        <Phone1 
          title="PlayStation 5"
          image={Gadget}
          pathTo="/Lambert/gadget"
        />
        <Phone1 
          title="Phone Accessories"
          image={Access}
          pathTo="/Lambert/gadget"
        />
        <Phone1 
          title="HeadPhones, EarBuds"
          image={Earbud}
          pathTo="/Lambert/gadget"
        />
      
      </div>
      .
    </div>
  );
}

export default Phones;