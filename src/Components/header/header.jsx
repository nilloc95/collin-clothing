import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss'
import { ReactComponent as Logo} from '../../assets/Summer_01.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>
                HOME
            </Link>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                    <Link className='option' to='/login'>SIGN IN</Link>
            }
        </div>

    </div>
)



export default Header