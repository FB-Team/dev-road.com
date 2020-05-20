import {
  ChildFirst,
  ChildSecond,
  ChildThirst,
} from '../../../testToolsChildren';

const CNET = {
	meta: {
		hasChildren: false,
		path: '/application-prog/desktop/cnet',
		id: 'CNET'
	},
	data: {
		profdesc: 'Десктопная разработка с использованием С шарпа и библиотеки .NET',
		proftitle: 'C#',

	},
	children: []
}
CNET.data.expanded = {
	desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	imgPath: '',
	tools: {
		name: 'name',
		links: [{
			name: 'linkname',
			target: '#'
		}],
		children: [ChildFirst, ChildSecond, ChildThirst]
	},
	prosAndCons: {
		pros: ["Круто", "Весело", "Приложений для друзей!"],
		cons: ["Разработка только на виндоус", "Долгая разработка", "Сложно"]
	},
	profsAlike: {
		ids: ['frontEnd','Java'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aut inventore quasi atque expedita, natus eligendi ut ratione, enim cumque eos qui omnis libero nisi sunt! Ab voluptatum adipisci amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nostrum iusto earum expedita, unde nemo optio dolorum quidem porro, sit tempore nihil reiciendis iste consequuntur repellat dignissimos placeat vero a!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, soluta, aspernatur. Fugit quisquam quaerat cumque magni blanditiis alias modi velit vero sapiente, animi nulla itaque minus! Dolorem at ea, illum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae aut quas, tempore modi est adipisci, quidem illum cum ducimus vitae aliquam voluptatum debitis natus delectus doloremque sint veniam rem.',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '2000$'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Данная профессия находится в топе по данным FireFox Explorer'
	}]
}
export default CNET
