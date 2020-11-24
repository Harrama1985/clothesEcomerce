import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HeaderContainer from './containers/HeaderContainer'
import {GlobalStyle} from './GlobalStyles'
import SignInUp from './pages/SignIn-Up';
import ContainerFluid from './components/ContainerFluid'
function App() {
  return (
    <>
    <GlobalStyle />
    <HeaderContainer/>
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
