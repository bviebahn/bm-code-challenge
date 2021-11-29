import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="page">
            <h1>Cart</h1>
            <p>Your shopping cart is empty. You cart add products in <Link to="/catalog">catalog</Link></p>
        </div>
    );
};

export default Cart;
