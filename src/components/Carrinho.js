import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeButton } from '../store/actions'

class Carrinho extends React.Component{
  render(){
    const { newValue, removeButton} = this.props
    let length = newValue.length
    let i = 0
    let total = 0
    if(length > 0){
      for(let i = 0 ; i < newValue.length ; i++){
        total += newValue[i][1]
      }
    }
    return(
      <div>
        {length === 0 ? <p> você não tem produtos no Carrinho </p> : 
        <div>
          <div style={{display:"flex", flexWrap:"wrap"}}>
            {newValue && newValue.map(x => (
                
              <div key={i++} style={{padding:"20px 110px"}}>
                <p>{x[0]}</p>
                <p>R$ {x[1]},00</p>
                <button onClick={() => removeButton(x[2])}> Retirar do carrinho </button>
              </div>
              
            ))}
          
          </div>
          <hr/>
          <p>Total: { total }</p>
        </div>
        }
      </div>
    )
  }
}
const mapStateToProps = store => ({
  newValue: store.carrinho.newValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeButton }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(Carrinho)