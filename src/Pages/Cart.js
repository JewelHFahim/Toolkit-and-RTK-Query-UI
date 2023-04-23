import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';

const Cart = () => {

    const carts = useSelector((state)=> state.cart.cart);
    console.log(carts);

    return (
        <div>
            <h1 className='text-3xl text-center'>Added Products to Cart</h1>
            <div className='grid grid-cols-4 gap-10 my-5 mx-20'>
                {
                   carts.map(product => <ProductCard product={product} />)
                }
            </div>
            
        </div>
    );
};

export default Cart;