import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { auth, createUserProfile } from '../../firebase/firebase.utils'
import {Redirect} from 'react-router-dom'
import './sign-up.scss'

class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirect: null
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`)
      return
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password
        )

      await createUserProfile(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        redirect:'/'
    })

    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const {name, value} = event.target

    this.setState({ [name]: value})
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } 
      const {displayName, email, password, confirmPassword} = this.state;
      return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type= 'text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type= 'email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='email'
              required
            />
            <FormInput
              type= 'password'
              name='password'
              value={password}
              onChange={this.handleChange}
              label='password'
              required
            />
            <FormInput
              type= 'password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;