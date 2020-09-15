import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';
import Header from './Components/header/header';
import LogIn from './Pages/login/login';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import { toggleCartHidden } from './redux/cart/cart.actions';



class App extends React.Component{


  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  

  render () {

    const {toggleCartHidden, hidden} = this.props;
    const getRidOfDropdown = () =>{
        if (!hidden){toggleCartHidden()}
      }

    return (
      <div onClick={getRidOfDropdown}>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/login' render={ () => this.props.currentUser ? (<Redirect to='/'/>) : (<LogIn/>)}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({user:{ currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
