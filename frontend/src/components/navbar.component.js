import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">E-Lib</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-tem">
                            <Link to="/" className="nav-link">Book Store</Link>
                        </li>
                        <li className="navbar-tem">
                            <Link to="/create" className="nav-link">Add Books</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="text-white">
                            <span className="fa fa-user-plus"></span> Admin
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}