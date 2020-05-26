import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends React.Component{

    render(){
        return(
            <div className="main-header">
                <div className="container my-0 ">
                <div className="row">
                    <div className="col-lg-5 col-6 align-items-center">
                        <div className="row">
                            <div className="col-auto hide-in-small">
                                <FontAwesomeIcon icon="seedling" size="5x" color="lightgray" className="d-lg-none" />
                                <p className="d-block d-lg-none font-weight-light font-italic">Access Libya </p>
                            </div>
                            <div className="col">
                                <h1 className="d-none d-lg-block">Api . Ly</h1>          
                                <p className="d-none d-lg-block font-weight-light font-italic">Backend Access for Libya </p>
                            </div>
                        </div>
                     </div>    
                    <div className="col d-flex align-items-center flex-row-reverse">
                        <div className="language-location">
                            <a className="btn btn-lg btn-outline-success mt-4 mt-lg-0" id="signupButton" >العربية</a>
                        </div>
                        <div className="language-location">
                            <FontAwesomeIcon icon="globe" /> <span>EN</span>
                        </div>
                        <div className="language-location">
                            <FontAwesomeIcon icon="street-view" /> <span>US</span>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
         );
    }
}

export default Header;