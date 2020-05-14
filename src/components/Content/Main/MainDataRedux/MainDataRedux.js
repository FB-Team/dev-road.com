
import ApplicationProgRedux from './ApplicationProgRedux/ApplicationProgRedux.js';
import SystemProgRedux from './SystemProgRedux';
import WebProgRedux from './WebProgRedux';
//КИРИЛЛ ДОБАВИЛ БЕКСЛЭШ В СВОЙСТВО PATH, ДОБАВИЛ СВОЙСТВО ID В META
const root = {
    meta: {
      hasChildren: true,
      isRoot:      true,
      path:        '/',
      id: 'root'
    },
    data:{},
    children: [ ApplicationProgRedux, SystemProgRedux, WebProgRedux ]
}
export default root
