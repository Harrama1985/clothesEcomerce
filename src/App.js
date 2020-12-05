import React,{useEffect} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HeaderContainer from './containers/HeaderContainer'
import {GlobalStyle} from './GlobalStyles'
import SignInUp from './pages/SignIn-Up';
import Checkout from './pages/Checkout'
import ContainerFluid from './components/ContainerFluid'
import { auth,creatUserProfilDoc} from './firebase/firebase'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors';
//import { selectCollectionsArray } from './redux/shop/shopSelectors';
function App({currentUser,setCurrentUser}) {
  useEffect(() => {
    const userSubscribe = auth.onAuthStateChanged(async(userAuth)=> {  //ila dar login ola khrej chihad odkhal chihad
      if(userAuth){
        const userRef = await creatUserProfilDoc(userAuth) //?????? wach hna fin kanecree hadak luser jdid ??
        userRef.onSnapshot(snap=>setCurrentUser({id:snap.id,...snap.data()}))   //??????????????????????????????       
      }else{
        setCurrentUser(userAuth) // hna radi ikoun userAuth null
      }
    })
    //hadi bach kanhot data fi firestore
    //addCollectionAndDocuments('collections', collectionArray.map(({title,items})=>({title,items})))
    return ()=> userSubscribe()
  }, [setCurrentUser])
  return (
    <>
    <GlobalStyle />
    <HeaderContainer/>
    <ContainerFluid>

    <Switch>

      <Route exact path ='/' component={Home} />
      
      <Route path='/shop' component={Shop} />

      <Route path='/checkout' render={()=>{ return currentUser ? <Checkout/> : <Redirect to='/signin'/>}} />
      
      <Route path='/signin' render={()=>{ return currentUser ? <Redirect to='/'/> : <SignInUp />}} />

    </Switch>
    
    </ContainerFluid>
    </>
  );
}
const mapStateToProps = (state)=>{
  return {
      currentUser : selectCurrentUser(state),
      //collectionArray: selectCollectionsArray(state)
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    setCurrentUser: user=> dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
