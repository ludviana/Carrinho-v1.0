import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Loja from './components/Loja'
import Carrinho from './components/Carrinho'
import Menu from './components/Menu'


class App extends React.Component{
  render(){
    return (
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/' component={Loja}/>
          <Route exact path='/Carrinho' component={Carrinho}/>  
        </Switch>
      </div>
    )
  }
}

export default App;
