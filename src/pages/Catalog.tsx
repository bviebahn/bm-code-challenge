import Products from '../products.json';
import Product, { ProductProps } from '../components/Product';
import { Link } from 'react-router-dom';

const Sortiment = () => {
    return (
        <div className="page">
            <h1>Our products</h1>
            {
            Products.map((p:ProductProps) =>  <Product data={p} key={p.sku}/>)
            }
            <div className="center">
                <Link to="/cart">Go to cart</Link>
            </div>
        </div>
    );
};

export default Sortiment;
