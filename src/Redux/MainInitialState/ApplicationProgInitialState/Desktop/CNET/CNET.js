import { WPF, UWP} from './Tools/Tools'

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
	desc: `<p>Язык C# довольно хороший язык для тех, кто решил начать изучать программирование. Для разработки программ используется .Net Core или .Net Framework. Это фреймворки(среда для программирования), которые является посредником между вашими файлами с кодом и операционной системой. Для наших задач лучше использовать .Net Framework.(Core используется в веб приложениях, микросервисах и тд)</p>
  <p>Задачей программиста является разработка Windows приложений с графическим интерфейсом. В процессе обучения вам нужно будет научиться работать с базой данных, понимать принципы ООП и другое.</p>`,
	imgPath: '',
	tools: {
		name: 'С#',
		links: [
      {
  			name: 'ITDVN',
  			target: 'https://itvdn.com/ru/specialities/net-developer'
  		},
      {
        name: 'Metanit',
        target: 'https://metanit.com/sharp/'
      },
      {
        name: 'C# 8.0 Карманный справочник',
        target: 'http://radiosit.ru/news/c_8_0_karmannyj_spravochnik/2020-03-08-8746'
      },{
        name: 'Документация',
        target: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/'
      }
    ],
		children: [WPF, UWP]
	},
	prosAndCons: {
		pros: ["Средний порог вхождения. Подходит для новичков", "Частые обновления языка и платформы", "Наличие \"сахара\"", "Модульность .Net(Разные части программы можно писать на разных языках)", "ООП"],
		cons: ["Разработка только на Windows(desktop)", "Производительность", "Довольно просто изъять исходники готовой программы"]
	},
	profsAlike: {
		ids: ['Java', 'JsElectron', 'backEnd'],
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
		target: 'C# находится на 5 строчке в рейтинге топ языков. В основном, в больших компаниях есть спрос на специалистов .Net, в маленьких же предпочитают альтернативы.'
	}]
}
export default CNET
