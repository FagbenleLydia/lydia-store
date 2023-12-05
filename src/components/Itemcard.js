import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
  <div className="a-box flex">
    <div className="a-b-img">
    <img src={props.img} className="card-img-top img-fluid" alt=""/>
    <div class="s-b-text">
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-title">NGN{props.price}</h5>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-success" onClick={() =>  addItem(props.item)}>Add to cart</button>
  </div>
  </div>
  </div>
  );
};

export default Itemcard;
