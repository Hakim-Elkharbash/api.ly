import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home(props){
    return(
        <React.Fragment>
            <div className="row-1">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h1 className="text-center text-secondary font-weight-bold">Key Features</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4 mb-2">
                        <Card>
                            <CardBody>
                            <CardTitle><h4 className=" text-center font-weight-bold">Esay</h4></CardTitle>
                            <hr />
                            <p className="mt-4">Esay to use, Esay to use, Esay to use, Esay to use, Esay to use, Esay to use.</p>
                            <a href="#" className="btn btn-outline-success mt-3">More.. <FontAwesomeIcon icon="chevron-circle-right"  /></a>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-sm-4 mb-2">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className=" text-center font-weight-bold">Secure</h4></CardTitle>
                                <hr />
                                <p className="mt-4">Highly secure, Highly secure, Highly secure, Highly secure, Highly secure.</p>
                                <a href="#" className="btn btn-outline-success mt-3">More.. <FontAwesomeIcon icon="chevron-circle-right"  /></a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm-4 mb-2">
                            <Card>
                                <CardBody>
                                <CardTitle><h4 className=" text-center font-weight-bold">Flixable</h4></CardTitle>
                                <hr />
                                <p className="mt-4">Easy to customize, Easy to customize, Easy to customize, Easy to customize.</p>
                                <a href="#" className="btn btn-outline-success mt-3">More.. <FontAwesomeIcon icon="chevron-circle-right"  /></a>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>   
            </div>  
            <div className="row-1">
                <div className="container">
                    test
                </div>
            </div>    
        </React.Fragment>
    );
}

export default Home;