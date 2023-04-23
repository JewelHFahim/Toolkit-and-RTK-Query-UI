import React from "react";
import ProductCard from "../component/ProductCard";
import { toggleBrnads, toggleStock } from "../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../features/api/productApi";

const Home = () => {  
  const { data } = useGetProductsQuery();
  const products = data;
  const { stock, brands, isLoading } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  let content;
  if (isLoading) {
    return (content = <p>Loading...</p>);
  }

  if (products?.length) {
    content = products?.map((product) => <ProductCard product={product} />);
  }

  if (products?.length && (stock || brands?.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status == true;
        }
        return product;
      })
      .filter((product) => {
        if (brands?.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product, i) => <ProductCard key={i} product={product} />);
  }

  const activeClass = "bg-success px-2 rounded-xl text-white";
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <ul className="flexc justify-center pt-5">
        <li>
          <button
            className={`${stock ? activeClass : ""}`}
            onClick={() => dispatch(toggleStock())}
          >
            In Stock
          </button>
        </li>
        <li>
          <button
            className={` ${brands.includes("amd") ? activeClass : ""}`}
            onClick={() => dispatch(toggleBrnads("amd"))}
          >
            AMD
          </button>
        </li>
        <li>
          <button
            className={` ${brands.includes("intel") ? activeClass : ""}`}
            onClick={() => dispatch(toggleBrnads("intel"))}
          >
            Intel
          </button>
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-5 m-10 ">{content}</div>
    </div>
  );
};

export default Home;
