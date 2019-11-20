import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        return (
            <div className="navigationBar">
                <Link to="/Home"><div className="navBarItems">Home</div></Link>
                <Link to="/One"><div className="navBarItems">API 1</div></Link>
                <Link to="/Two"><div className="navBarItems">API 2</div></Link>
                <Link to="/Three"><div className="navBarItems">API 3</div></Link>
                <Link to="/Four"><div className="navBarItems">API 4</div></Link>
                <Link to="/Five"><div className="navBarItems">API 5</div></Link>
            </div>
        )
    }
}
