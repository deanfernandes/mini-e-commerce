import { Link } from "react-router";

function Header() {
    return (
        <header>
            <h1>mini e-commerce</h1>
            <Link to="/" className="btn btn-primary btn-lg">Home</Link>
            <Link to="/products" className="btn btn-primary btn-lg">Products</Link>
        </header>
    );
}

export default Header;