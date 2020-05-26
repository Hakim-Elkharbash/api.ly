import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class SubFooter extends React.Component{
    render(){
        return(
            <div className="sub-footer">
                <div className="container">
                    <div className="row justify-content-center pt-5">             
                        <ul className="list-inline footerList">
                            <li className="list-inline-item pl-2"><Link to="terms">Terms</Link></li>
                            <li className="list-inline-item pl-2"><Link to="privacy">Privacy</Link></li>
                            <li className="list-inline-item pl-2"><Link to="apis">APIs</Link></li>
                            <li className="list-inline-item pl-2"><a href="https://github.com">GitHub</a></li>
                            <li className="list-inline-item pl-2"><Link to="help">Help</Link></li>
                        </ul>          
                    </div>
                    <div className="row justify-content-center pb-3">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} className="socialLinks" /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} className="socialLinks" /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} className="socialLinks" /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={['fab', 'github']} className="socialLinks" /></a></li>
                        </ul>    
                    </div>
                </div>
            </div>
        );
    }
}

export default SubFooter
