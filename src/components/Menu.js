import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Menu extends React.Component{
  render(){
    const { newValue } = this.props
    let length = newValue.length
    return(
      <nav>
        <ul style={{display:'flex', justifyContent:'space-evenly'}}>
          <li><Link to="/">Loja</Link></li>
          <li><Link to="/Carrinho">Carrinho / { length } </Link></li>
        </ul>
      </nav>
    )
  }

}

const mapStateToProps = store => ({
  newValue: store.carrinho.newValue
})

export default connect(mapStateToProps)(Menu);