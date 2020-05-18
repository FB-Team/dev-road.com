import React from 'react';
import {Link} from 'react-router-dom'
import s from './BreadCrumbs.module.css';

const BreadCrumbs = (props) => {
  debugger;
	if (props.crumbs) {
		function onClick(e) {
			props.jump(e.currentTarget.meta.path)
		}
		const crumbs = props.crumbs.map(crumb => (<Link className={s.link} to={crumb.path} onClick={onClick}>
			{crumb.title}
		</Link>))
		return (<div className='BreadCrumbs'>
			{crumbs}
		</div>)
	}
  else {
    return <div></div>
  }
}
export default BreadCrumbs
