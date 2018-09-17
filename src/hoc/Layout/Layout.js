import React, { Component } from 'react';

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
                <Toolbar drawerToggleClicked = {this.sideDrawerTogglerHandler}/>
                <SideDrawer open={this.state.showSiderDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className= {classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;