import React from 'react';
import Imageselection from './Imageselection'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({number:Math.floor(Math.random()*6+1)})
  }

  render(){
    return(
      <div style={{textAlign:"center", padding:"50px"}}>
      <div><button type="button" onClick={this.handleClick}>Roll</button></div>
      <Imageselection value={this.state.number}/>
      </div>
    )
  }

}

export default App;
