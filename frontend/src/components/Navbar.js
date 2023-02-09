import React from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  
  return (
    <header>
      <div className="container">
        <Link to='/'>
            <h1>Let's Workout</h1>
        </Link>
        <nav>
        <div>
          <button onClick={handleClick}>Log out</button>
        </div>
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>;
    </header>
  );
};

export default Navbar;
