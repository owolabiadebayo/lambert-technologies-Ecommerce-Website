import React from 'react';

// import './Electronic.css';
import Phone_Navbar from '../../AllPhone_Navbar/AllPhone_Navbar';
import './AllPhones.css';

import PhantomGT from './jbl.jpg';
import PhantomGTclub from './ps5.jpg';
import Superfly78 from './pad.jpg';
import Tiempo8 from './1.jpg';
import Superfly7pro from './Gadget.jpg';
import Superfly7pr from './12.jpg';
import Superfly7p from './13.jpg';
import Superfly7 from './14.jpg';
import Superfly from './15.jpg';
import Superfl from './16.jpg';
import Superf from './17.jpg';
import Super from './18.jpg';
import Supe from './19.jpg';
import Sup from './20.jpg';
import Su from './21.jpg';
import S from './22.jpg';
import Superfly7proo from './23.jpg';
import PhoneComponent from '../../phoneComponent/phoneComponent';


const Electronic = () => {
  return (
    <div className="allPhones">
      <Phone_Navbar
        title="Lambert Technologies"
        pathGym="/Lambert/Phone"
        path2="/Lambert/Gadget"
      />
      <div className="allPhones__phone">
        <PhoneComponent 
          image={PhantomGT}
          id="500000"
          title="JBL waterproof"
          before={38500}
          after={25000}
          category="EarBud"
        />
        <PhoneComponent 
          image={PhantomGTclub}
          id="500001"
          title="Fifa 2021"
          before={NaN}
          after={NaN}
          category="Playstation 5 "
        />
        <PhoneComponent 
          image={Superfly78}
          id="500002"
          title="Playstation 5 dual pad"
          before={39000}
          after={35000}
          category="PS 5"
        />
        <PhoneComponent 
          image={Tiempo8}
          id="500003"
          title="Iphone Charger"
          before={90}
          after={60}
          category="Iphone accessories"
        />
        <PhoneComponent 
          image={Superfly7pro}
          id="500004"
          title="oraimo 20000mah"
          before={17000}
          after={14000}
          category="oraimo"
        />
          <PhoneComponent 
          image={Superfly7pr}
          id="500005"
          title="oraimo 20000mah"
          before={12000}
          after={9000}
          category="oraimo "
        />
          <PhoneComponent 
          image={Superfly7p}
          id="500006"
          title="Anker SoundCore"
          before={30000}
          after={20000}
          category="Anker"
        />
          {/* <PhoneComponent 
          image={Superfly7}
          id="500007"
          title="Jbl speaker"
          before={90000}
          after={17000}
          category="Jbl waterproof"
        /> */}

        <PhoneComponent 
          image={Superfly}
          id="500008"
          title="powerbank"
          before={19000}
          after={17000}
          category="New age"
        />
          <PhoneComponent 
          image={Superf}
          id="500009"
          title="powerbank"
          before={19000}
          after={17000}
          category="New age"
        />
        
          <PhoneComponent 
          image={Supe}
          id="500011"
          title="power bank"
          before={17000}
          after={13000}
          category="New age"
        />
          
           
          <PhoneComponent 
          image={S}
          id="500015"
          title="Anker"
          before={25000}
          after={20000}
          category="Anker"
        />
          <PhoneComponent 
          image={Superfly7proo}
          id="500016"
          title="Playstation 4"
          before={300000}
          after={285000}
          category="Playstation 4"
        />
      </div>
    </div>
  );
}

export default Electronic;