import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { CartProduct, clearCart } from '../features/cart/cartSlice';
import CartProductCard from '../components/CartProductCard';
import { useDispatch } from 'react-redux';

function Cart() {
    const dispatch = useDispatch();
    const cartProducts: CartProduct[] = useSelector((state: RootState) => state.cartReducer);
    const cartLength = cartProducts.reduce((total, item) => total + item.quantity, 0)

    const handleClick = () => {
        dispatch(clearCart());
    }

    return (
    <>
        <h1>Cart:</h1>
        {cartLength > 0 
        ? <><p>You have {cartLength} items in your cart.</p> <button className="btn btn-danger" onClick={handleClick}>Clear cart</button></>
        : <p>You have no items in your cart.</p>
        }
        
        {
            cartProducts.map((c) => {
                return <CartProductCard key={c.id} cartProduct={c}/>;
            })
        }
    </>
    )
}

export default Cart;