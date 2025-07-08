import { NavLink, Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import './Header.scss'

function Header() {
    const cartLength = useSelector((state: RootState) =>
        state.cartReducer.reduce((total, item) => total + item.quantity, 0)
    );

    return (
        <header>
            <nav className="navbar bg-primary navbar-expand-lg pt-3">
                <div className="container-fluid">
                    <h1 className="navbar-brand">mini e-commerce</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse test" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active fw-bold text-decoration-underline disabled' : 'nav-link'
                                }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="/products"
                                end
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active fw-bold text-decoration-underline disabled' : 'nav-link'
                                }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                to="/favorites"
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active fw-bold text-decoration-underline disabled' : 'nav-link'
                                }
                                >
                                    Favorites
                                </NavLink>
                            </li>
                        </ul>

                        <div className="d-flex cart">
                            <Link to='/cart' className="btn btn-outline-light" title="Go to shopping cart">
                                <i className="bi bi-cart"></i>
                                <span className="position-absolute translate-middle badge rounded-pill bg-danger cart__badge">
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