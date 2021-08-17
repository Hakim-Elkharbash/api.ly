import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SubHeader extends React.Component{
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        alert("test");
    }
    render(){
        return(
            <div className="sub-header sticky-top">
                <div className="container my-0">
                    <div className="row">
                        <div className="col">
                            <Navbar dark sticky="top" expand="lg">             
                            <NavbarToggler onClick={this.toggleNav} className="m10" /> 
                            <span className="title-small-sc pl-2 font-weight-400">api.ly</span>
                                <Collapse isOpen={this.state.isNavOpen} navbar>  
                                    <Nav navbar>   
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                            <   FontAwesomeIcon icon="home" /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/apis">
                                                <FontAwesomeIcon icon="seedling" /> APIs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/docs">
                                                <FontAwesomeIcon icon="coffee" /> Docs
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/prices">
                                                <FontAwesomeIcon icon="money-bill-wave" /> Prices
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/login">
                                                <FontAwesomeIcon icon="sign-in-alt"  /> LOG IN
                                            </NavLink>
                                        </NavItem>
                                        <a className="btn btn-lg btn-outline-success mt-4 mt-lg-0 text-success" onClick={this.toggleModal} >SIGN UP</a>
                                    </Nav>
                                </Collapse>
                            </Navbar>   
                        </div>                   
                        <div className="col-2 d-flex flex-row-reverse align-items-center">
                            <FontAwesomeIcon icon="user-circle" size="3x" color="gray" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubHeader