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

  // function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // onSearch(query);
  };

  return (
    <>
      <div className="App">
        <h1 className="features">Featured Products</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Category ..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {isPending && (
          <div className="spinner">
            <DotSpinner size={50} speed={0.9} color="black" />
          </div>
        )}
        {products && <ProductList products={products.slice(0, 17)} />}
      </div>
    </>
  );
};

export default Home;
