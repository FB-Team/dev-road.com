import {Link} from 'react-router-dom'
import React from 'react';
import s from './BreadCrumbs.module.css';

const BreadCrumbs = (props) => {
	if (props.crumbs) {
		function onClick(event) {
			props.jump(event.currentTarget.pathname)
		}
		const crumbs = props.crumbs.map(crumb => {
			return (<Link className={s.link} to={crumb.path} onClick={onClick}>
				{crumb.title}
			</Link>)
		})
		return (<div className='BreadCrumbs'>
			{crumbs.reverse()}
		</div>)
	} else {
		return <div></div>
	}
}
export default BreadCrumbs