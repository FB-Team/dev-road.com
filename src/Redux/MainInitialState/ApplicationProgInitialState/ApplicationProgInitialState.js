
import GamesRedux from './Games/GamesRedux';
import MobileRedux from './Mobile/MobileRedux';

const ApplicationProgInitialState = {
    meta: {
      hasChildren: true,
      path:        '/application-prog',
      id: 'ApplicationProgRedux'
    },
    data:{
      proftitle: 'Прикладное программирование',
      profdesc: 'Создание привычного и хорошо известного для нас типа ПО - игр и прикладных программ',
      imgPath: 'https://goodtidings.ru/upload/iblock/d8d/d8db9472a3b850249601c36094ce9985.jpg'
    },
    children: [
      GamesRedux,
      MobileRedux
    ]
}
export default ApplicationProgInitialState
