
import Products from '../products.json';
import Button from './Button';

type ProductProps = {
    name: string;
    price: string;
    plusPrice: string;
    sku: number;
    img: string;
}

const Product  = ({ data }: { data: ProductProps}) => (
    <div>
        <div>
            <img src={data.img} width="250px" height="auto" alt={data.name} title="" />
        </div>
        <div>
            <h3>{data.name}</h3>
            <p>Art.: {data.sku}</p>
            <p>Price: <span>{data.price}</span></p>
            <Button title="Add to cart" value={data.sku} onClick={() => true}/>
        </div>
    </div>
);


const Catalog = () =>  {
    return (
        <div>
            {
                Products.map((p:ProductProps) =>  <Product data={p} key={p.sku}/>)
            }
        </div>
    )
};

export default Catalog;
