import React from 'react';
import s from './Link.module.css';
const mullet = 'mullet'
class Link extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      renderLinks: false
    }
    this.mouseout = this.mouseout.bind(this)
    this.mouseover = this.mouseover.bind(this)
  }
  mouseout (event){
    if ((event.currentTarget === event.target) || event.currentTarget.id !== mullet){
      this.setState({renderLinks: false})
      console.log('mouseOut')
    }
  }
  mouseover(event){
    if (event.currentTarget === event.target){
        console.log('mouseOver')
        this.setState({renderLinks: true})
    }
  }
  render(){
  let links = this.props.links.map (link => <a id={mullet} href={link.target}>{link.name}</a>)
  return (
    this.state.renderLinks  === false ? <li className={s.li} onMouseOver={this.mouseover} mouseOut={this.mouseout}>{this.props.content}{this.props.innerComponents}</li>:
    <li className={s.li} mouseOver={this.mouseover} onMouseOut={this.mouseout}>{this.props.content}<br/>{links}{this.props.innerComponents}</li>
  )
  }
}
export default Link
