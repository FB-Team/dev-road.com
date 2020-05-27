import MVC from './MVC/MVC';
import MVP from './MVP/MVP';
import MVVP from './MVVP/MVVP';
import VIPER from './VIPER/VIPER';

const Architectures= {
  name: 'Архитектура IOS приложений (одно из нижеперечисленных для начала, остальные освоите в процессе разработки)',
  links: [
    {
      name: "Архитектуры и различия между ними",
      target: "https://habr.com/ru/company/badoo/blog/281162/"
    }
  ],
  children: [MVC, MVP, MVVP, VIPER],
	conclusion: ''
}
export default Architectures
