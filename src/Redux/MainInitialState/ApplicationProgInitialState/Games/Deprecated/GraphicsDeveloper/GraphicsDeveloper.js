import UnityBranch from './Stack/UnityBranch/UnityBranch';
import UnrealEngineBranch from './Stack/UnrealEngineBranch/UnrealEngineBranch';
const GraphicsDeveloper = {
  meta: {
    hasChildren: false,
    path:        '/application-prog/desktop/graphicsdeveloper',
    id: 'GraphicsDeveloper'
  },
  data:{
    profdesc: 'Графический разработчик',
    proftitle: 'Графический разработчик',
  },
  children: [
  ]
}
GraphicsDeveloper.data.expanded = {
	desc:`Графический разработчик это  перспективное и высокооплачиваемое направление в IT индустрии. Оосновные задачи графического разработчика это создание или усовершенсвтование существующих графических движков, создание различных визуальных эффектов. Если обобщить круг компетенции графического программиста, то он должен создать логику визуального предствления данных.`,
	imgPath: 'https://disgustingmen.com/wp-content/uploads/2020/04/maxresdefault-1-1.jpg',
	tools: [UnityBranch, UnrealEngineBranch],
	prosAndCons: {
		pros: ["Востребованность", "Популярность","Высокооплачиваемость"],
		cons: ["Туманные перспективы", "Порог вхождения"]
	},
	profsAlike: {
		ids: ['frontEnd','Java'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: "Графический разработчик это высокооплачиваемое и востребованное направление в IT индустрии, однако начинающему следует учитывать современные тенденции, такие как интерес игровой индустрии к облачным сервисам и постепенное смещение ориентации игровой разработки в сторону консолей. ",
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '2500$'
	}, {
		name: 'Как быстро я смогу стать графическим разработчиком?',
		target: 'Все очень индивидуально, в среднем, 1-1,5 года качественного обучения практически гарантируют положительный результат'
	}]
}
export default GraphicsDeveloper
