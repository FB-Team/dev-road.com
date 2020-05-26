import CocosBranch from './Stack/CocosBranch/CocosBranch';
import UnityBranch from './Stack/UnityBranch/UnityBranch';
import UnrealEngineBranch from './Stack/UnrealEngineBranch/UnrealEngineBranch';

const Games = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/games',
    id: 'Games'
  },
  data:{
    proftitle: "Игры",
    profdesc: "Популярное и высокооплачеваемое направлением в IT индустрии"
  },
  children: []
}
Games.data.expanded = {
	desc: `<p></p>`,
	imgPath: '', // IDEA: Можно будет добавить изображение с разными стеками технологий (объединить через граф. редактор)
               // FEED: Отличная идея!
	tools: [UnityBranch, UnrealEngineBranch, CocosBranch],
	prosAndCons: {
		pros: [],
		cons: []
	},
	profsAlike: {
		ids: ['backEnd'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '~700$ для начинающего, ~2000$ и больше для middle разработчика'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Профессия не слишком популярна.'
	}, {
		name: 'Перспективы desktop',
		target: 'В последнее время данная область угасает, все больше и больше переходит в Web: веб-приложения, облачные сервисы и другое.'
	}]
}
export default Games
