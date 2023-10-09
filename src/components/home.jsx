import { DotSpinner } from "@uiball/loaders";

import ProductList from "./template";
import useFetch from "./useFetch";
import { useState } from "react";

const Home = () => {
  const {
    data: products,
    isPending,
    Error,
  } = useFetch("http://localhost:8002/products");

  // function SearchBar
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div className="App">
        <h1 className="features">Featured Products</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Category ..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {isPending && (
          <div className="spinner">
            <DotSpinner size={50} speed={0.9} color="black" />
          </div>
        )}
        {products && (
          <ProductList
            products={products.filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.title.toLocaleLowerCase().includes(search);
            })}
          />
        )}
      </div>
    </>
  );
};

export default Home;
