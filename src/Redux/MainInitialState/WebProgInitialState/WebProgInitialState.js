import { BackEnd } from './BackEnd/BackEnd';
import FullStack from './FullStack/FullStack';
import FrontEnd from './FrontEnd/FrontEnd';


const WebProgInitialState = {
  meta:{
    hasChildren: true,
    path: '/web-prog',
    id: 'WebProgRedux',
  },
  data:{
    profdesc: 'Написание сайтов и веб приложений.',
    proftitle: 'Сетевое (Веб) программирование',
    imgPath: 'https://coddyschool.com/upload/iblock/795/web.png'

  },
  children: [FrontEnd, BackEnd, FullStack]
}

export default WebProgInitialState
