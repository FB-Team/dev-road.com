import React from 'react'
import './Sidetile.css'
class Sidetile extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    console.log('this.props.descrption = ' + this.props.description)
    return (
      <div id="Sidetile"><button className="sidelink">{this.props.description}</button></div>
    )
  }
}
export default Sidetile
