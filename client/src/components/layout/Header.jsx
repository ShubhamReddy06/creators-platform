import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <span className="logo-icon">✍️</span>
                    <span className="logo-text">CreatorHub</span>
                </Link>

                <nav className="header-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        end
                    >
                        Home
                    </NavLink>
                    {user ? (
                        <>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                Dashboard
                            </NavLink>
                            <span className="nav-link" style={{ cursor: 'default' }}>Hi, {user.name}</span>
                            <button
                                onClick={logout}
                                className="nav-link"
                                style={{ background: 'transparent', border: 'none', fontFamily: 'inherit', fontSize: 'inherit', cursor: 'pointer', padding: 0 }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            >
                                <span className="nav-link-register">Register</span>
                            </NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
