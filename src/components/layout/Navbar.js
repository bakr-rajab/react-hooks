import React from "react";
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Pusher</Link>
                    <div className="float-right">
                        <Link to='/signout' className="right">
                            <Button  color="inherit">LogOut</Button>
                        </Link>
                    <Link to='/signin'  className='right'>
                        <Button  color="inherit">Login</Button>
                    </Link>

                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
