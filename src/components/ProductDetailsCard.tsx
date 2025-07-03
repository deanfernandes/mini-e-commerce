import { Product } from '../types/product';
import { useNavigate } from 'react-router';
import { addToCart } from '../features/cart/cartSlice';
import { toggleFavorite } from '../features/favorites/favoritesSlice';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

type ProductDetailsCardProps = {
    product: Product,
    isFavorite: boolean,
}

function ProductDetailsCard({ product, isFavorite }: ProductDetailsCardProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const timeoutRef = useRef<number | null>(null);

    const onAddToCartClick = () => {
        dispatch(addToCart(product));
        setShowAlert(true);
        if(timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    const onToggleFavoriteClick = () => {
        dispatch(toggleFavorite(product.id));
    };

    return (
        <div className='container'>
            <div className="card mb-3" style={{ maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}.</p>
                            <p className="card-text fw-bold fs-4">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            <button className='btn btn-primary' onClick={onAddToCartClick}>Add to cart</button>
                            {showAlert && <div className="alert alert-success" role="alert">
                                Added to cart!
                            </div>}
                        </div>
                        <button className='btn btn-link position-absolute top-0 end-0 mt-3 me-3 fs-3' onClick={onToggleFavoriteClick}>
                            <i className={`bi ${isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart'}`} title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}></i>
                        </button>
                    </div>
                </div>
            </div>

            <button className='btn btn-secondary' onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}

export default ProductDetailsCard;