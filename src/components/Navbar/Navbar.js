import React, {useState} from 'react';
import { Button } from '../Buttons';
import { MenuItems } from './MenuItems';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const HandleClick = () =>{
        setClicked(!clicked);
    }

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React <i className='fab fa-react'></i></h1>
            <div className='menu-icon' onClick={HandleClick}>
                {/* Font awesome kryss och hamburgarmeny */}
                <i className={clicked? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (<li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>)

                })}
            </ul>
            <Button>Sign Up</Button>
        </nav>
    )
}

export default Navbar