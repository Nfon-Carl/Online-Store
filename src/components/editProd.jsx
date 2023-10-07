import useFetch from "./useFetch";
import { DotSpinner } from "@uiball/loaders";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const image = "/images/mac.png";

  useEffect(() => {
    fetch("http://localhost:8002/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTitle(resp.title);
        setPrice(resp.price);
        setDescription(resp.description);
        setImage(resp.image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const prodData = { title, price, description, image };

    fetch("http://localhost:8002/products/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prodData),
    })
      .then((res) => {
        alert("Edidted successfully.");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h2 className="create-header">Edit Product</h2>

      <div className="create-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Item Name</label> <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Price</label>
            <br />
            <input
              type="text"
              placeholder="$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Description</label> <br />
            <textarea
              rows="4"
              cols="58"
              placeholder="Input Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="create-btn">
            Edit
          </button>
          <Link to="/dashboard">
            <button className="back-btn">Back</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default EditProd;
