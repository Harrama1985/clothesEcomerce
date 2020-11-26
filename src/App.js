import React,{useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HeaderContainer from './containers/HeaderContainer'
import {GlobalStyle} from './GlobalStyles'
import SignInUp from './pages/SignIn-Up';
import ContainerFluid from './components/ContainerFluid'
import {auth,creatUserProfilDoc} from './firebase/firebase'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const userSubscribe = auth.onAuthStateChanged(async(userAuth)=> {  //ila dar login ola khrej chihad odkhal chihad
      if(userAuth){
        const userRef = await creatUserProfilDoc(userAuth) 
        userRef.onSnapshot(snap=>setCurrentUser({id:snap.id,...snap.data()}))  
      }else{
        setCurrentUser(userAuth) // hna radi ikoun userAuth null
      }
    })
  }, [])
  return (
    <>
    <GlobalStyle />
    <HeaderContainer currentUser={currentUser}/>
    <ContainerFluid>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route path='/shop' component={Shop} />
      <Route path='/signin' component={SignInUp} />
    </Switch>
    </ContainerFluid>
    </>
  );
}

export default App;
