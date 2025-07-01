import { Product } from '../types/product';
import './ProductCard.css';
import { Link } from 'react-router';

type ProductCardProps = {
    product: Product,
}

function ProductCard({ product }: ProductCardProps) {
    return (
    <div className="card">
        <img src={product.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{product.title}<span className="badge text-bg-info rounded-pill">New</span></h5>
            <Link to={`${product.id}`} className='btn btn-secondary'>View details</Link>
        </div>
    </div>
    );
}

export default ProductCard;