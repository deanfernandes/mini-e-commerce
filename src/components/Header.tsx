import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <nav className="navbar bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="navbar-brand">mini e-commerce</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;