import { DotSpinner } from "@uiball/loaders";
import useFetch from "./useFetch";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {
    data: products,
    isPending,
    Error,
  } = useFetch("http://localhost:8002/products");
  console.log(products);
  const navigate = useNavigate();

  const loadEdit = (id) => {
    console.log(id);
    navigate("/dashboard/product/edit/" + id);
  };

  const deleteProduct = (id) => {
    if (window.confirm("Do you want to delete this Product ?")) {
      fetch("http://localhost:8002/products/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          window.location.reload();

          alert("Removed successfully.");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

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
                        <button
                          className="edit-btn"
                          onClick={() => {
                            loadEdit(item.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                        >
                          Delete
                        </button>
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
