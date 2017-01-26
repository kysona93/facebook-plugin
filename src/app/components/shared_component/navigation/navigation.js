import React from 'react';
import { Link } from 'react-router';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import './navigation.css';

export default class Navigation extends React.Component {
    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Facebook Plugin</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <Link to="/comment">Comment</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="/like">Like</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="/share">Shared</Link>&nbsp;&nbsp;&nbsp;
                            <Link to="/page">Page</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

