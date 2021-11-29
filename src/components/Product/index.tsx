
import Button from '../Button';
import './styles.css';

export type ProductProps = {
    name: string;
    price: string;
    plusPrice: string;
    sku: number;
    img: string;
}

const Product  = ({ data }: { data: ProductProps}) => (
    <div className="productContainer">
        <div className="left">
            <div>
                <img src={process.env.PUBLIC_URL + data.img} width="120px" height="auto" alt={data.name} title="" />
            </div>
            <div>
                <h3>{data.name}</h3>
                <p>Art.Nr.: {data.sku}</p>
            </div>
        </div>
        <div className="right">
            <p className="price"><span>{data.price} &euro;</span></p>
            <Button title="Add to cart" value={data.sku} onClick={() => alert('add to cart!')}/>
        </div>
    </div>
);

export default Product;
