import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/action/cartActions";
import {ethers} from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum)

await provider.send("eth_requestAccounts", []);

let productquantity;

const signer = await provider.getSigner()
const daiAddress = "0xC6aEef06415440f1e6bf7d2B18c785faAB269fd8";
const daiAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "val",
        "type": "uint256"
      }
    ],
    "name": "Value",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "MapIDvC",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "MapIDvT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Qmap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "burnExpired",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "checkB",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "purchase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "redeem",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "remove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

const CartList = () => {
  let { cartItems } = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const [count, setCount] = useState(1);

  const [price, setPrice] = useState(0);

  const increment = (e) => {
    // let id = e.target.id;
    // let pro = cartItems.filter(product => product._id === id)
    // productquantity = pro[0].quantity;
    // productquantity++;
    // console.log(productquantity);
    
    setCount(count+1);
  }

  const decrement = (e) => {
    setCount(count-1);
  }

  useEffect(() => {
    totalPrice();
  }, [cartItems]);

  const totalPrice = () => {
    let PRICE = 0;
    cartItems.map((item) => {
      PRICE += item.price;
    });
    setPrice(PRICE);
  };

  const dispatch = useDispatch();
  const removeItem = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  const checkOut = async () => {

    const address = signer.address;
    const daiWithSigner = await daiContract.connect(signer);
    let tx = await daiWithSigner.purchase(price, address);
    const id = await daiContract.getId();
    console.log(tx);
    // cartItems = "";
  }

  return (
    <div className="cartcontainer">
      <div className="leftcont">
        <div className="itemscard">
          <div className="namerow">
            <h2>shopping cart</h2>
            <h2>{cartItems.length} items</h2>
          </div>
          <hr className="hr" />
          <div className="smallcontainer">
            <div className="productDets">
              <h4>product details</h4>
            </div>
            <div className="productPrice">
              <h4>quantity</h4>
              <h4>price</h4>
              <h4>total</h4>
            </div>
          </div>
          <div className="allsavedproducts">
            {cartItems.map((item) => (
              <div className="product1details">
                <div className="proimage">
                  <div className="product1img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="product1name">
                    <h2>{item.title.shortTitle}</h2>
                    <h4>{item.category}</h4>
                    <i
                      onClick={() => removeItem(item._id)}
                      class="ri-delete-bin-line"
                    ></i>
                  </div>
                </div>
                <div className="product1smdets">
                  <div className="productquantity">
                    <button id={item._id} onClick={(e) => decrement(e)} className="decrementbutton">-</button>
                    <button className="centerbutton"> {count} </button>
                    <button id = {item._id} onClick={(e) => increment(e)} className="incrementbutton">+</button>
                  </div>
                  <h4>{item.price}</h4>
                  <h4> { item.price * count  } </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rightcont">
        <div className="ordersummary">
          <h2>order summary</h2>
          <hr className="hr2" />
          <div className="smcard">
            <div className="subtotal">
              <h4>subtotal</h4>
              <h4>₹{price * count}</h4>
            </div>
            <div className="subtotal">
              <h4>Delivery charges</h4>
              <h4> {cartItems.length ? "+₹40" : "₹0"} </h4>
            </div>
            <div className="subtotal">
              <h4>Estimated Tax</h4>
              <h4>{cartItems.length ? "+₹10" : "₹0"}</h4>
            </div>

            <div className="promo">
              <h3>Promo Code</h3>
              <input type="text" placeholder="Enter Your Promo Here" />
              <button>Apply</button>
            </div>

            <hr className="hr2" />

            <div className="totalcost">
              <h2>Total Cost</h2>
              <h2>{cartItems.length ? `₹${price * count + 50}` : "₹0"}</h2>
            </div>
            <button onClick={() => checkOut()} id="rzp-button1" className="checkout">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;