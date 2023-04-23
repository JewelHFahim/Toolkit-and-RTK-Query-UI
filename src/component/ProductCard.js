import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl border border-slate-400 p-2 relative">
      {
        (pathname.includes("cart") && (
          <div className="w-[50px] h-[50px] rounded-full bg-success absolute top-[-8px] right-[-8px] text-lg font-semibold grid items-center justify-center text-white">
            {product.quantity}
          </div>
        ))
      }

      <figure>
        <img src={product.image} alt="Shoes" className="w-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.model}</h2>
        <p>${product.price}</p>

        {
          !pathname.includes("cart") &&
          <div className="card-actions justify-end">
          <button onClick={() => handleAdd(product)} className="btn btn-sm btn-success"> 
            Add to Cart
          </button>
        </div>
        }

        {
          pathname.includes("cart") &&
          <div className="card-actions justify-end">
          <button
          onClick={ () => handleRemove(product)}
           className="btn btn-sm btn-success"> Remove </button>
        </div>
        }

      </div>
    </div>
  );
};

export default ProductCard;
