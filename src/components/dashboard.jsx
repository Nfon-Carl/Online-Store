import { DotSpinner } from "@uiball/loaders";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    data: products,
    isPending,
    Error,
  } = useFetch("http://localhost:8002/products");
  console.log(products);
  return (
    <>
      {isPending && (
        <div className="spinner">
          <DotSpinner size={50} speed={0.9} color="black" />
        </div>
      )}
      <div className="add-new">
        <Link to="/dasboard/create">
          <button>Add New Product +</button>
        </Link>
      </div>
      <div className="cont">
        <table>
          <thead>
            <tr className="headers">
              <td>ID</td>
              <td>Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => (
                <>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td> $ {item.price} </td>
                    <td>{item.description.slice(0, 50)} ...</td>
                    <td>
                      <div className="action-sec">
                        <button className="details-btn">
                          <a href={`/product-details/${item.id}`}>Details</a>
                        </button>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
