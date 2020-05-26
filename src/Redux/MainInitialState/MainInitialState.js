import { findComponent } from '../findComponent';
import ApplicationProgInitialState from './ApplicationProgInitialState/ApplicationProgInitialState.js';
import OtherProg from './OtherProgInitialState/OtherProg';
import SystemProgInitialState from './SystemProgInitialState';
import WebProgInitialState from './WebProgInitialState';


//КИРИЛЛ ДОБАВИЛ БЕКСЛЭШ В СВОЙСТВО PATH, ДОБАВИЛ СВОЙСТВО ID В META
const Root = {
	meta: {
		hasChildren: true,
		isRoot: true,
		path: '/',
		id: 'root'
	},
	data: {
		proftitle: 'Главная'
	},
	children: [ApplicationProgInitialState, SystemProgInitialState, WebProgInitialState, OtherProg]
}

const addParents = root => {
	const addParents2 = (curObj, parent) => {
		curObj.parent = parent
		if (curObj.children.length > 0) {
			curObj.children.forEach(child => {
				addParents2(child, curObj)
			})
		}
	}

  root.parent = null
	let parent = root
	parent.children.forEach(child => {
		addParents2(child, parent)
	});


}

const setProfsAlike = parent => {
	if (parent.children.length === 0) {
		if (parent.data.expanded) {
			parent.data.expanded.profsAlike.ids.forEach( (id, index) => {
				let tempComp = findComponent(Root, id, "id");
				if (tempComp === null) {
					console.log(`Установлен неверный id profsAlike у ${parent.data.proftitle}`)
				} else {
					parent.data.expanded.profsAlike.result[index] = {
						title: tempComp.data.proftitle,
						imgPath: "",
						urlPath: tempComp.meta.path
					}
				}
			})
		}
	}
	else {
		parent.children.forEach(child => {
			setProfsAlike(child)
		});
	}
	return
}

addParents(Root);
setProfsAlike(Root);
export default Root
