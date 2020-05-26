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
  mouseover (event){
    this.setState({renderLinks: true})
    event.stopPropagation()
  }
  mouseout(event){
    if (event.relatedTarget )
    if (event.relatedTarget.className != s.linkChild && event.relatedTarget.className != s.linksWrapper) this.setState({renderLinks: false})
  }
  render(){
  let links = this.props.links.map ((link, i) => <a key={i} data-type="linkChild" className={s.linkChild} href={link.target}>{link.name}</a>)
  return (
    this.state.renderLinks  === false ? <li className={s.li}onMouseOver={this.mouseover} onMouseEnter={this.mouseenter}onMouseOut={this.mouseout}>{this.props.content}{this.props.innerComponents}</li>:
    <li className={s.li}onMouseOver={this.mouseover} onMouseOut={this.mouseout} onMouseEnter={this.mouseenter}>{this.props.content}<div className={s.linksWrapper}>{links}</div>{this.props.innerComponents}</li>
  )
  }
}
export default Link
