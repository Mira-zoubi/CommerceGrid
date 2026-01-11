import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setCart(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) return;

    const res = await fetch(
      `http://localhost:3000/api/cart/items/${itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity }),
      }
    );

    const data = await res.json();
    setCart(data);
  };

  const deleteItem = async (itemId) => {
    const res = await fetch(
      `http://localhost:3000/api/cart/items/${itemId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setCart(data);
  };

  const totalPrice = cart.items.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchCart();
  }, []);

  if (!token) return null;
  if (loading) return <p className="text-center">Loading cart...</p>;

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={`http://localhost:3000${item.product?.image}`}
                alt={item.product?.title}
                className="cart-image"
              />

              <div className="cart-info">
                <p className="cart-title">
                  {item.product?.title}
                  <span className="cart-company">
                    {" "}
                    ({item.productModel})
                  </span>
                </p>

              <p className="cart-price">
  <strong>
    {item.product?.price * item.quantity} JOD
  </strong>
</p>

              </div>

              <div className="cart-qty">
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity - 1)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="cart-delete"
                onClick={() => deleteItem(item._id)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: {totalPrice} JOD</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
