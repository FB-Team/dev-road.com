import DesktopRedux from './Desktop/DesktopRedux';
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
      profdesc: 'Область программирования, нацеленная, в основном, на автоматизацию процессов которая расчитана конкретно на конечного пользователя.'
    },
    children: [
      DesktopRedux,
      GamesRedux,
      MobileRedux
    ]
}
export default ApplicationProgInitialState
