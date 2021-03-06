import React from 'react';
import { Link } from 'react-router-dom';
import coverImage from "../../assets/cover/cover_image_v2.jpg";
import Auth from '../../utils/auth';
import Nav from '../Navigation';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center header-background">
      <div className="container flex-row justify-space-between-lg justify-center align-center text-light">
        <Link to="/">
          <h1>Haley N. Schwenk</h1>
        </Link>

        <Nav />
{/* 
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
