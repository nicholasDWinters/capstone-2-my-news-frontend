import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className='ml-3 Navbar-brand' href="/"><NavLink exact to='/'>home</NavLink></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className={isOpen ? 'mx-3' : 'ml-5 mx-3'} exact to='/business'>business</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-3' exact to='/tech'>tech</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-3' exact to='/sports'>sports</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-3' exact to='/health'>health</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-3' exact to='/entertainment'>entertainment</NavLink>
                        </NavItem>

                    </Nav>
                    <Nav navbar>
                        {localStorage.token ? '' : <NavItem><NavLink className='mx-3' exact to="/login">Login</NavLink></NavItem>}
                        {localStorage.token ? '' : <NavItem><NavLink className='mx-3' exact to="/register">Register</NavLink></NavItem>}

                        {localStorage.token ? <NavItem><NavLink className='mx-3' exact to="/articles">My Articles</NavLink></NavItem> : ''}
                        {localStorage.token ? <NavItem><NavLink className='mx-3' exact to="/logout">Logout</NavLink></NavItem> : ''}
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;