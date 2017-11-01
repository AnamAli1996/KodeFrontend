import React from 'react'
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/registerStudent'> Register Student </Link></li>
                        <li><Link to='/StudentList'> Show all students </Link></li>
                        <li><Link to='/SignIn'> Sign In</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
