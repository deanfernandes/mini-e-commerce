import { useParams, useNavigate, useOutletContext } from 'react-router';
import { Product, ProductsContext } from '../types/product';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart as addCart } from '../features/cart/cartSlice';

function ProductDetails() {
    const navigate = useNavigate();
    const { products } = useOutletContext<ProductsContext>();
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const timeoutRef = useRef<number | null>(null);
    const dispatch = useDispatch();

    const addToCart = (product: Product) => {
        dispatch(addCart(product));

        setShowAlert(true);

        if(timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    if(!product) return <p>Product not found.</p>

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
                    <button className='btn btn-primary' onClick={()=>addToCart(product)}>Add to cart</button>
                    {showAlert && <div className="alert alert-success" role="alert">
                        Added to cart!
                    </div>}
                </div>
                </div>
            </div>
            </div>

            <button className='btn btn-secondary' onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export default ProductDetails;