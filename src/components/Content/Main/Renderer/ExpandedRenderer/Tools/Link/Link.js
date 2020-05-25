import React from 'react';
import s from './Link.module.css';
const mullet = 'mullet'
class Link extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      renderLinks: false
    }
    this.mouseleave = this.mouseleave.bind(this)
    this.mouseenter = this.mouseenter.bind(this)
  }
  mouseleave (event){
    if (true){}
      this.setState({renderLinks: false})
  }
  mouseenter(event){
    if (event.currentTarget === event.target){
        this.setState({renderLinks: true})
    }
  }
  render(){
  let links = this.props.links.map ((link, i) => <a key={i} data-id="child" href={link.target}>{link.name}</a>)
  return (
    this.state.renderLinks  === false ? <li data-id="parent" className={s.li} onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>{this.props.content}{this.props.innerComponents}</li>:
    <li className={s.li} onMouseOver={this.mouseenter} onMouseLeave={this.mouseleave}>{this.props.content}<br/>{links}{this.props.innerComponents}</li>
  )
  }
}
export default Link
