import { CPlus, Qt } from './ToolsData';

const CPlusQt = {
		name: 'C++ и Qt',
		links: [{
			name: 'Изучение синтаксиса и особенностей С++',
			target: "https://tproger.ru/books/cpp-books-beginners"
		}],
		children: [CPlus, Qt],
	conclusion: "На сегодняшний день связка С++ и Qt становится все более популярной, фреймворк Qt устраняет главный недостаток С++ - компилируемость, и позволяет свободно запускать приложения, написанные на С++ без необходимости компиляции.",
}
export default CPlusQt
