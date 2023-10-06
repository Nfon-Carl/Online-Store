import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateProd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const image = "/images/mac.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, price, description, image };

    fetch("http://localhost:8002/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        alert("Saved Sucessfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });

    console.log({ title, price, description });
  };
  return (
    <>
      <h2 className="create-header">Create Product</h2>

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
            Create
          </button>
          <Link to="/dashboard">
            <button className="back-btn">Back</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateProd;
