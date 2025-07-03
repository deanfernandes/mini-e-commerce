import { Product } from "../types/product";
import { href, Link } from 'react-router'

type FavoriteProductCardProps = {
    product: Product,
}

function FavoriteProductCard({ product }: FavoriteProductCardProps) {
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link to={href("/products/:id", { id: product.id.toString() })}>
                        <img src={product.image} className="img-fluid rounded-start" alt="..."></img>    
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteProductCard;