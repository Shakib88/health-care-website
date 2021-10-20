import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Header.css"

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        
            <div>
                <Navbar bg="dark" variant="warning" sticky="top" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    
                  
                    <Navbar.Collapse className="justify-content-end">
                        
                        <nav className="nav">
                        <Link className="nav" to="/home">Home</Link>
                        <Link className="nav" to="/dentist">Doctors</Link>
                        <Link className="nav" to="/about">About Us</Link>
                        
                        {user?.email ?
                            <Button className="nav" onClick={logOut} variant="dark">Logout</Button> :
                            <Link className="nav" to="/login">Login</Link>}
                        <Navbar.Text className="nav">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        </nav>
                    
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        
    );
};

export default Header;