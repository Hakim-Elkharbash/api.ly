import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Button } from 'reactstrap';


class Footer extends React.Component{
   

    render(){
        return(
        <div className="main-footer py-3">
            <div className="container">
            <div className="row">
                <div className="col-0 col-md-6 d-none d-md-block">
                    <FontAwesomeIcon icon="seedling" size="3x" color="lightgray"  /><span><em>Copyright © 2020</em></span>
                </div>
                
                <div className="col input-group mb-3 pt-3">
                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-success" type="submit"> Subscribe <FontAwesomeIcon icon="paper-plane"  /></button>
                </div>
                </div>
            </div> 
            </div>
        </div>
        );
    }
}

export default Footer
