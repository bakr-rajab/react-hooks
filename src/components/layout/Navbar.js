import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AuthContext } from "../auth/Auth";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, 777);

  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Pusher
          </Link>
          <div className="float-right">
            {currentUser ? (
              <Link to="/signout" className="right">
                <Button id="logout" color="inherit">
                  LogOut
                </Button>
              </Link>
            ) : (
              <div>
                <Link to="/signin" className="right">
                  <Button color="inherit">Login</Button>
                </Link>
                <Link to="/signup" className="right">
                  <Button color="inherit">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
