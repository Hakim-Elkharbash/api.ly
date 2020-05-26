import React from 'react';
import Header from './Header/MainHeader';
import SubHeader from './Header/SubHeader';
import Footer from './Footer/MainFooter';
import SubFooter from './Footer/SubFooter';
import Home from './Contents/Home'
import Apis from './Contents/Apis'

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <SubHeader />
                    <Switch>
                        <Route path='/Home' component={Home} />
                        <Route path='/Apis' component={Apis} />
                        <Redirect to='/Home' />
                    </Switch>
                <SubFooter />
                <Footer />
            </React.Fragment> 
        );
    }
}

export default Main;