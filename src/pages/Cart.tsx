import { useStore } from 'react-redux';

function Cart() {
    const store = useStore();
    const state = store.getState();
    console.log(state);

    return (
    <>

    </>
    )
}

export default Cart;