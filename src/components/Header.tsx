import { NavLink, Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

function Header() {
    const cartLength = useSelector((state: RootState) => state.cartReducer.length);

    return (
        <header>
            <nav className="navbar bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="navbar-brand">mini e-commerce</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
                                }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
                                }
                                >
                                    Products
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <Link to='/cart' className="btn btn-outline-light">
                                <i className="bi bi-cart me-2"></i>
                                Cart
                                <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartLength}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;