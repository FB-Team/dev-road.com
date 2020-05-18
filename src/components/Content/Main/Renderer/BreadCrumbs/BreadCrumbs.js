import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react';

import { jump } from '../../../../../Redux/actions';
import s from './BreadCrumbs.module.css';


const BreadCrumbs = (props) => {
	if (props.crumbs) {
		function onClick(event) {
      console.log('e.currentTarget - ' + event.currentTarget.pathname)
			props.jump(event.currentTarget.pathname)
		}
		const crumbs = props.crumbs.map(crumb => {
      console.log('crumb (path, title) = '  + crumb.path + ', ' + crumb.title)
      return (<div key={crumb.path}><Link className={s.link} to={crumb.path} onClick={onClick}>
			{crumb.title}
		</Link></div>)}
  )
		return (<div className='BreadCrumbs'>
			{crumbs.reverse()}
		</div>)
	}
  else {
    return <div></div>
  }
}
export default BreadCrumbs
