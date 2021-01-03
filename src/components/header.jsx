import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap"

export default class Header extends Component {

    render() {
        return (
        <Navbar class="header" bg="dark" variant="dark">
            <Navbar.Brand href="#">Junhua</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#header">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
            </Nav>
        </Navbar>
        );
    }
}