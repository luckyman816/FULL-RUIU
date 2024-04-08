"use client";
import { useState } from "react";
import Link from "next/link";
import { cartItemsData } from "@/public/data/cart-items";
import CartSingleItem from "./CartSingleItem";

const CartSection = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const handleDelete = (itemId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <section className="cart-m">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-m-inner">
              <div className="intro">
                <h2 className="light-title title-animation fw-7 text-white mt-12">
                  Cart
                </h2>
              </div>
              <div className="cart-t-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => {
                      return (
                        <CartSingleItem
                          key={item.id}
                          item={item}
                          onDelete={() => handleDelete(item.id)}
                        />
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="text-center fw-6 text-white empty-cart-m">
                  Your Cart Is Empty
                </h4>
              </div>
              <div className="cart__wrapper-footer">
                <form action="#" method="post">
                  <input
                    type="text"
                    name="promo-code"
                    id="promoCode"
                    placeholder="Promo code"
                  />
                  <button type="submit" className="btn btn--secondary">
                    Apply Code
                  </button>
                </form>
                <Link href="checkout" className="btn btn--primary fw-6">
                  Checkout
                </Link>
              </div>
              <div className="cart-content-cta text-center">
                <Link href="shop">
                  Continue Shopping
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
