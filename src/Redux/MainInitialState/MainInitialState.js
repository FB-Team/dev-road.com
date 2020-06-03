import { findComponent } from '../findComponent';
import ApplicationProgInitialState from './ApplicationProgInitialState/ApplicationProgInitialState.js';
import OtherProg from './OtherProgInitialState/OtherProg';
import WebProgInitialState from './WebProgInitialState/WebProgInitialState';




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
	children: [ApplicationProgInitialState, WebProgInitialState, OtherProg],
	pathesArray: []
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

const addImagePath = root => {
	const addImagePathHelper = (curObj) => {
		curObj.data.imgPath =     `./img/${curObj.meta.id}.png`
		// Работает относительно пути файла, в который вставляется посредством require... нельзя выйти с папки назад, только вперед
		if (curObj.children.length > 0) {
			curObj.children.forEach(child => {
				addImagePathHelper(child)
			})
		}
	}
	let parent = root
	parent.children.forEach(child => {
		addImagePathHelper(child)
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
						imgPath: tempComp.data.imgPath,
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

const setPathesArrayToRoot = root => {
	const setPathesArrayToRootHelper = (curObj) => {
		root.pathesArray.push(curObj.meta.path)
		if (curObj.children.length > 0) {
			curObj.children.forEach(child => {
				setPathesArrayToRootHelper(child)
			})
		}
	}
	root.pathesArray.push(Root.meta.path)
	let parent = root
	parent.children.forEach(child => {
		setPathesArrayToRootHelper(child)
	});
}

setPathesArrayToRoot(Root);
addImagePath(Root);
addParents(Root);
setProfsAlike(Root);
export default Root
