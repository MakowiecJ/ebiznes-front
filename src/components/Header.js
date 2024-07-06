import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            if (user) {
                setIsLoggedIn(true);
                setUserName(user.username);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    };

    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link to="/products" className="navigation-link">Products</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/cart" className="navigation-link">Cart</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/payments" className="navigation-link">Payments</Link>
                    </li>
                    <li className="navigation-right">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login" className="navigation-link">Login</Link>
                                <Link to="/register" className="navigation-link">Register</Link>
                            </>
                        ) : (
                            <>
                                <span>Witaj, {userName}</span>
                                <button onClick={handleLogout} className="navigation-link">Wyloguj</button>
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;