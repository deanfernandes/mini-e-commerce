import { useParams, useNavigate, useOutletContext } from 'react-router';
import { ProductsContext } from '../types/product';

function ProductDetails() {
    const navigate = useNavigate();
    const { products } = useOutletContext<ProductsContext>();
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));

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
                    <button className='btn btn-primary'>Add to cart</button>
                </div>
                </div>
            </div>
            </div>

            <button className='btn btn-secondary' onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export default ProductDetails;