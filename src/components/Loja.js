import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addButton } from '../store/actions'

class Loja extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      itens:[
        {
          "id":1,
          "name":"produto 1",
          "price":100.00
        },
        {
          "id":2,
          "name":"produto 2",
          "price":150.00
        },
        {
          "id":3,
          "name":"produto 3",
          "price":200.00
        }
      
      ],
    }
  }

  render(){
    const { addButton } = this.props
    
    return(
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {this.state.itens && this.state.itens.map(item => (
          <div key={item.id} style={{padding:"20px 110px"}}>
            <p>{item.name}</p>
            <p>R$: {item.price},00</p>
            <button onClick={ () => addButton([item.name, item.price, item.id])}>Add ao carrinho</button>
          </div>
        ))}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addButton }, dispatch)

export default connect(null, mapDispatchToProps )(Loja)