"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cartItemsData } from "@/public/data/cart-items";

const SidebarCart = ({ isCartOpen, setIsCartOpen }: any) => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity < 100
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div
        className={"sidebar-cart" + (isCartOpen ? " sidebar-cart-active" : " ")}
      >
        <div className="sidebar-cart__inner">
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <i className="bi bi-x-lg close-icon"></i>
          </button>
          <h2>
            Shopping Bag
            <span className="count-item">{cartItems.length}</span>
          </h2>
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div className="cart-item-single" key={item.id}>
                  <div className="cart-item-thumb">
                    <Link href="product-single">
                      <Image src={item.productImg} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="cart-item-content">
                    <h6 className="title-animation">
                      <Link href="product-single">{item.name}</Link>
                    </h6>
                    <p className="price">
                      $
                      <span className="item-price">
                        {item.price.toFixed(2)}
                      </span>
                    </p>
                    <div className="measure">
                      <button
                        aria-label="decrease item"
                        className="quantity-decrease"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        aria-label="add item"
                        className="quantity-increase"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    aria-label="delete item"
                    className="delete-item"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              );
            })}
          </div>
          <div
            className="empty-cart"
            style={{ display: cartItemsData.length > 0 ? "none" : "block" }}
          >
            <h5>Your cart is empty</h5>
            <Link href="shop">Add Products</Link>
          </div>
          <div className="totals">
            <div className="subtotal">
              <span className="label">Subtotal:</span>
              <span className="amount ">
                $
                <span className="total-price">
                  {calculateTotalPrice().toFixed(2)}
                </span>
              </span>
            </div>
          </div>
          <div className="action-buttons">
            <Link
              className="view-cart-button"
              href="cart"
              aria-label="go to cart"
            >
              Cart
            </Link>
            <Link
              className="checkout-button"
              href="checkout"
              aria-label="go to checkout"
            >
              Checkout
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "cart-backdrop" + (isCartOpen ? " cart-backdrop-active" : " ")
        }
        onClick={() => setIsCartOpen(false)}
      ></div>
    </>
  );
};

export default SidebarCart;
