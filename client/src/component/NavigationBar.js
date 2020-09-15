import {Navbar, Nav, NavLink, NavbarBrand} from 'react-bootstrap'
import React, {Component} from 'react';

import "./NavigationBar.css"


class NavigationBar extends Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark" fixed="top">
                
                <NavbarBrand href="/Home">
                    <img
                        alt=""
                        src="/NavIcon32x32.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Financial Freedom
                </NavbarBrand>
                
                <Nav className="mr-auto">
                    <NavLink href="/Home">Home</NavLink>
                    <NavLink href="/BudGet">Budget</NavLink>
                    <NavLink href="/Investments">Investments</NavLink>
                    <NavLink href="/Dashboard">Dashboard</NavLink>
                </Nav>
            
            </Navbar>
        )
    }
}


export default NavigationBar; 