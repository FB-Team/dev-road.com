import { Git, Paradigms } from '../CPlusQt/ToolsData';
import { Spring } from './ToolsDataJava';
import { JavaTool } from './ToolsDataJava';
const Java = {
  meta: {
    hasChildren: false,
    path:        '/application-prog/desktop/java',
    id: 'Java'
  },
  data:{
    profdesc: 'Десктопная разработка с использованием Java',
    proftitle: 'Java',
  },
  children: [
  ]
}
Java.data.expanded = {
	desc:`<p>Java это один из самых популярных языков программирования в сфере desktop разработки, совместно и фреймворком Spring он позволяет создавать кроссплатформенные высокопроизводительные приложения.</p> <p>На данный момент, из-за роста популярности облачных технололгий, основная область применения Java сместилась в сторону web-технологий, поэтому, если вы заинтересованы в работе на максимально интересных и современных проектах больше, чем в поддержке существующего кода, настоятельно рекомендум Вам рассмотреть актуальную область применения Java, ссылка будет оставлена внизу.</p>`,
	imgPath: 'https://habrastorage.org/getpro/habr/post_images/0b9/a59/beb/0b9a59beb68a5d6c439c60f38c753342.png',
	tools: {
		name: "Java(Spring)",
		links: [{
			name: 'Изучение синтаксиса и особенностей С++',
			target: "https://tproger.ru/books/cpp-books-beginners"
		}],
		children: [Git, Paradigms, Spring, JavaTool]
	},
	prosAndCons: {
		pros: ["Кросплатформенность", "Высокооплачиваемость", "Удобство разработки"],
		cons: ["Невостребованность", "Высокий порог вхождения", "Поддержка устаревших продуктов"]
	},
	profsAlike: {
		ids: ['frontEnd','backEnd'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: "В целом, Java это отличный выбор для разработки крупных высоконаргуженных приложений, но связи с убывающей популярностю destop разработки имеет смысл посмотреть в сторону чего-нибудь более современного и популярного, например, веба.",
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '2500$'
	}, {
		name: 'Как быстро я смогу стать десктоп разработчиком?',
		target: 'Все очень индивидуально, в среднем, 1-1,5 года качественного обучения практически гарантируют положительный результат'
	}]
}
export default Java
