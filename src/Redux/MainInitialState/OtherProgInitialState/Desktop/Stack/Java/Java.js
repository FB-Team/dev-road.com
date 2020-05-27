import { Git, Paradigms } from '../CPlusQt/ToolsData';
import { JavaTool, Spring } from './ToolsData';

const Java = {
	name: "Java(Spring)",
	links: [{
		name: 'Изучение синтаксиса и особенностей С++',
		target: "https://tproger.ru/books/cpp-books-beginners"
	}],
	children: [Git, Paradigms, Spring, JavaTool],
	conclusion: "Java это отличное решение для десктопной разработки, позволяет создавать кроссплатформенные игры и приложения.",
}
export default Java
