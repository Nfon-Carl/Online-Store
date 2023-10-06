import { DotSpinner } from "@uiball/loaders";

import ProductList from "./template";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: products,
    isPending,
    Error,
  } = useFetch("http://localhost:8002/products");

  return (
    <>
      <div className="App">
        <h1 className="features">Featured Products</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Category ..." />
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
