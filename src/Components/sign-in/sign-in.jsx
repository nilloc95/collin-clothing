import React from 'react'
import FormInput from '../form-input/form-input'
import './sign-in.scss'
import CustomButton from '../custom-button/custom-button'
import {signInWithGoogle, auth} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                email: '',
                password: '',
            }
    }

    handleChange = (e) =>{
        const { value, name } = e.target;
        this.setState({[name]: value}) 
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        } catch(error){
            console.log(error)
        }

    }
        
    render(){ 
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' type='email' 
                        value={this.state.email} 
                        label='email'
                        required />

                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label = 'password'
                        required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit' > Sign In </CustomButton>

                        <CustomButton type='button' isGoogleSignIn onClick={ signInWithGoogle }>
                                Sign In With Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;