import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav className='header'>
            <img src={require('./Logo.png')} alt="Logo" />
            <img onClick={() => setOpenMenu(!openMenu)} className='menuBtn' src={require('./menu.png')} alt="Logo" />

            <div className='links'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/contact'>
                    <button className="navBtn">Get in Touch</button>
                </Link>
            </div>

            <div className={openMenu ? 'verticalLinks' : 'disable'}>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/contact'>
                    <button className="navBtn">Get in Touch</button>
                </Link>
            </div>            
        </nav>
    )
}
