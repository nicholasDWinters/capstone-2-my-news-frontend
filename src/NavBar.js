import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import SearchForm from './forms/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { addAlert, logout } from './reducer/actions';


const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(st => st.userReducer.token);

    const [isOpen, setIsOpen] = useState(false);

    function logoutUser() {
        dispatch(logout());
        dispatch(addAlert({ "message": 'logged out...', "color": "info" }));
        localStorage.clear();
        history.push('/');
    }

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
                        {token ? '' : <NavItem><NavLink className='mx-3' exact to="/login">login</NavLink></NavItem>}
                        {token ? '' : <NavItem><NavLink className='mx-3' exact to="/register">register</NavLink></NavItem>}

                        {token ? <NavItem><NavLink className='mx-3' exact to="/articles">my articles</NavLink></NavItem> : ''}
                        {token ? <NavItem><NavLink className='mx-3' exact to="/logout" onClick={() => logoutUser()}>logout</NavLink></NavItem> : ''}
                    </Nav>

                </Collapse>
            </Navbar>
            <SearchForm />



        </div>
    );
}

export default NavBar;