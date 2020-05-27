import { CNETSynt } from '../../../Desktop/Stack/CNET/ToolsData';
import Unity from './Unity';

const UnityBranch = {
  name: 'Unity',
  links: [
    /*{
      name: 'Онлайн курсы по Unity',
      target: 'https://unity.com/ru/learn/partner-courses'
    }*/
  ],
  children: [CNETSynt,Unity],
	conclusion: 'Используется для разработки мобильных игр и платформеров. Простота и использование современных С# и Javascript выгодно выделяет его на фоне аналогичных решений, а низкий порог входа и наибольшая востребованность на рынке труда не могут не подкупать. Условно бесплатен.'
}
export default UnityBranch
