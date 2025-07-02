import { CartProduct, removeFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

type CartProductCardProps = {
    cartProduct: CartProduct
}

function CartProductCard({ cartProduct }: CartProductCardProps) {
    const dispatch = useDispatch();

    const deleteItem = (id: number)=> {
        dispatch(removeFromCart(id));
    }

    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={cartProduct.image} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cartProduct.title}</h5>
                        <p className="card-text fw-bold">{cartProduct.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <p className="card-text">{cartProduct.quantity}</p>
                        <p className="card-text">Sub total: {(cartProduct.price * cartProduct.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <p className="card-text">
                            <button className="btn btn-primary rounded-pill" onClick={()=>deleteItem(cartProduct.id)} title="Delete item from cart">
                                <i className="bi bi-trash"></i>
                            </button>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;