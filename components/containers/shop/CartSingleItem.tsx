"use client";
import { useState } from "react";
import Image from "next/image";

const CartSingleItem = ({ item, onDelete }: any) => {
  const [quantity, setQuantity] = useState(parseInt(item.quantity, 10));
  const price = parseFloat(item.price);

  const cartItemPrice = () => {
    return (quantity * price).toFixed(2);
  };

  const increaseQuantity = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = () => {
    onDelete();
  };

  return (
    <tr className="cart-item-single-m">
      <td className="cart-single-product">
        <div className="thumb">
          <Image src={item.productImg} alt="Image" priority />
        </div>
        <div className="cart-content">
          <p>{item.name}</p>
          <div className="item-review">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </td>
      <td>
        <p>
          $<span className="item-price">{price}</span>
        </p>
      </td>
      <td>
        <div className="measure">
          <button
            aria-label="decrease item"
            className="quantity-decrease"
            onClick={decreaseQuantity}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <span className="item-quantity">{quantity}</span>
          <button
            aria-label="add item"
            className="quantity-increase"
            onClick={increaseQuantity}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <div className="amount">
          <p>
            $<span className="total-price">{cartItemPrice()}</span>
          </p>
        </div>
      </td>
      <td className="cart-cta">
        <button className="remove-item" onClick={removeItem}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </td>
    </tr>
  );
};

export default CartSingleItem;
