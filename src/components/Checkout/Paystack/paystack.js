import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import "./paystack.css"
import { useStateValue } from '../../StateProvider/StateProvider';
import { getCartTotal } from '../../StateProvider/reducer';
import Wallpaper from './wallpaper.jpg';
import PaymentIcon from '@material-ui/icons/Payment';

import ReactWhatsapp from 'react-whatsapp';



const Paystack1 = () => {
  const publicKey = "pk_your_public_key_here"
  const amount = 1000000
  const [email, setEmail] = useState("")
  const [Address, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="Paystack1">
      <div className="container1">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src={Wallpaper}
            alt="product"
          />
        </div>
        <div className="checkout1">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Delivery Address</label>
              <input
                type="text"
                id="Address"
                value={Address}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="WhatsApp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* <PaystackButton className="paystack-button" {...componentProps} /> */}
            <label>Click to proceed payments and chat with our customers care </label>
           <PaymentIcon/> <ReactWhatsapp className="paystack-button" number='+2347031166976' message= {`Customers with ${email}, Address ${Address} and Phone nos ${phone} want to make purchase of 
            ${cart?.map(item => (item.title) , )} ,The number of Items in cart : ${cart?.length} ,
            Total Price of the items: #${getCartTotal(cart)}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paystack1