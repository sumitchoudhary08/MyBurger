import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components//Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSiderDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSiderDrawer: false});
    }

    sideDrawerTogglerHandler = () => {
        this.setState((prevState) => {
          return  {showSiderDrawer: !prevState.showSiderDrawer};
        });
    }

    render (){
        return (
            <Aux>
                <Toolbar 
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked = {this.sideDrawerTogglerHandler}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSiderDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className= {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps)(Layout);