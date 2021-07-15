import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import SearchForm from './forms/SearchForm';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar fixed='top' color="light" light expand="md" className=''>
                <Nav navbar>

                    <NavItem><NavLink className='mx-3' id='brand' exact to="/">home</NavLink></NavItem>
                </Nav>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className='mx-3' exact to='/business'>business</NavLink>
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
                        {localStorage.token ? '' : <NavItem><NavLink className='mx-3' exact to="/login">login</NavLink></NavItem>}
                        {localStorage.token ? '' : <NavItem><NavLink className='mx-3' exact to="/register">register</NavLink></NavItem>}

                        {localStorage.token ? <NavItem><NavLink className='mx-3' exact to="/articles">my articles</NavLink></NavItem> : ''}
                        {localStorage.token ? <NavItem><NavLink className='mx-3' exact to="/logout">logout</NavLink></NavItem> : ''}
                    </Nav>

                </Collapse>
            </Navbar>
            <SearchForm />



        </div>
    );
}

export default NavBar;