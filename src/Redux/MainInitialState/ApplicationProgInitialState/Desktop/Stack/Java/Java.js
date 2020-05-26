import { Git, Paradigms } from '../CPlusQt/ToolsData';
import { JavaTool, Spring } from './ToolsData';

const Java = {
	name: "Java(Spring)",
	links: [{
		name: 'Изучение синтаксиса и особенностей С++',
		target: "https://tproger.ru/books/cpp-books-beginners"
	}],
	children: [Git, Paradigms, Spring, JavaTool],
	conclusion: "В целом, Java это отличный выбор для разработки крупных высоконаргуженных приложений, но связи с убывающей популярностю destop разработки имеет смысл посмотреть в сторону чего-нибудь более современного и популярного, например, веба.",
}
export default Java
