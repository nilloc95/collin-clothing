import React from 'react'
import './login.scss'
import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/sign-up/sign-up';

const LogIn = () => {
        return(
            <div className='login'>
                <SignIn/>
                <SignUp/>
            </div>
        )
    }

export default LogIn;