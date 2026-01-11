import { useEffect, useState } from "react";
import "../AramexDetailsPage/ViewAramexProducts.css";

function ViewAppleProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleViewProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/apple-products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch Apple products", error);
      setLoading(false);
    }
  };


  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/cart/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          productModel: "AppleProducts", 
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.message || "Failed to add to cart");
        return;
      }

      alert("Added to cart");
    } catch (err) {
      alert("Error adding to cart");
    }
  };

  useEffect(() => {
    handleViewProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading products...</p>;
  }

  return (
    <div className="aramex-gallery">
      {products.map((product) => (
        <div key={product._id} className="aramex-card">
          {product.badge && (
            <span className="aramex-badge">{product.badge}</span>
          )}

          <img
            src={`http://localhost:3000${product.image}`}
            alt={product.title}
            className="aramex-image"
          />

          <p className="aramex-title">{product.title}</p>

          {product.variant && (
            <p className="aramex-variant">{product.variant}</p>
          )}

          {product.description && (
            <p className="aramex-description">{product.description}</p>
          )}

          <p className="aramex-price">{product.price} JOD</p>

          {product.stock !== undefined && (
            <p className="aramex-stock">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </p>
          )}

          <button
            type="button"
            className="aramex-purchase-btn"
            onClick={() => handleAddToCart(product._id)}
          >
            Purchase
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewAppleProducts;
