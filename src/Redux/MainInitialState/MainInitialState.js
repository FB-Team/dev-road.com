import ApplicationProgInitialState from './ApplicationProgInitialState/ApplicationProgInitialState.js';
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
	data: {},
	children: [ApplicationProgInitialState, SystemProgInitialState, WebProgInitialState]
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

addParents(Root);
export default Root
