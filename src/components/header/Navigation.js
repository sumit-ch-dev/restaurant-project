import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapses } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="dark">
                    <div className="container">
                        <NavbarBrand href="/">Saladia Restaurant</NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}


export default Navigation;