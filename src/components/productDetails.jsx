import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { DotSpinner } from "@uiball/loaders";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:8002/products/" + id);

  return (
    <>
      <h1 className="page-title">Product Details</h1>
      {isPending && (
        <div className="spinner">
          <DotSpinner size={50} speed={0.9} color="black" />
        </div>
      )}
      {error && <div>{error}</div>}
      {products && (
        <article>
          <div className="image-div">
            <img src={products.image}></img>
          </div>
          <div className="content-div">
            <h2>{products.title}</h2>
            <div>{products.description}</div>
            <h3>${products.price}</h3>
            <button>Add to Cart</button>
          </div>
        </article>
      )}
    </>
  );
};

export default ProductDetails;
