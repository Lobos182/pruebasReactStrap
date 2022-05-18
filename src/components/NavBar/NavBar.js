import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed=""
                full
            >
                <NavbarBrand className='' href="/">
                    <img src='./images/axis3d.jpg' width="80" height="auto" class=" d-inline-block align-text-center" alt='logo' />
                    Axis3DMendoza
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink className='navitem' onClick={()=>console.log('hice click en Productos')} href="#!">
                            Productos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navitem' onClick={()=>console.log('hice click en Nosotros')} href="#!">
                            Nosotros
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='navitem' onClick={()=>console.log('hice click en Contacto')} href="#!">
                            Contacto
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarText>
                    <a type="button" href="#!" onClick={()=>console.log('hice click en Carrito')} class="d-flex">
                        <button className='btn-outline-dark'>
                            <i className='bi bi-cart4 me-2 icono'></i>                                                      
                            <span className='badge bg-dark text-white ms-2 rounded cantcarrito'>
                                5
                            </span>
                        </button>
                    </a>
                </NavbarText>
            </Navbar>
        </div>
    );
}

export default NavBar