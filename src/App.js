import React,{useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HeaderContainer from './containers/HeaderContainer'
import {GlobalStyle} from './GlobalStyles'
import SignInUp from './pages/SignIn-Up';
import Checkout from './pages/Checkout'
import ContainerFluid from './components/ContainerFluid'
import {auth,creatUserProfilDoc} from './firebase/firebase'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
function App(props) {
  useEffect(() => {
    const userSubscribe = auth.onAuthStateChanged(async(userAuth)=> {  //ila dar login ola khrej chihad odkhal chihad
      if(userAuth){
        const userRef = await creatUserProfilDoc(userAuth) 
        userRef.onSnapshot(snap=>props.setCurrentUser({id:snap.id,...snap.data()}))  

      }else{
        props.setCurrentUser(userAuth) // hna radi ikoun userAuth null
      }
    })
    return ()=> userSubscribe()
  }, [props])
  return (
    <>
    <GlobalStyle />
    <HeaderContainer/>
    <ContainerFluid>
    <Switch>
      <Route exact path ='/' component={Home} />
      
      <Route path='/shop' component={Shop} />

      <Route path='/checkout' component={Checkout} />
      
      <Route path='/signin' render={()=>{ return props.currentUser ? <Redirect to='/'/> : <SignInUp />}} />
    </Switch>
    </ContainerFluid>
    </>
  );
}
const mapStateToProps = (state)=>{
  return {
      currentUser : selectCurrentUser(state)
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    setCurrentUser: user=> dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
