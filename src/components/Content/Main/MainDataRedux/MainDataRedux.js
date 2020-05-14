
import ApplicationProgRedux from './ApplicationProgRedux/ApplicationProgRedux';
import SystemProgRedux from './SystemProgRedux';
import WebProgRedux from './WebProgRedux';
//КИРИЛЛ ДОБАВИЛ БЕКСЛЭШ В СВОЙСТВО PATH, ДОБАВИЛ СВОЙСТВО ID В META
export const root = {
    meta: {
      hasChildren: true,
      isRoot:      true,
      path:        '/',
      id: ''
    },
    data:{

    },
    children: [ ApplicationProgRedux, SystemProgRedux, WebProgRedux ]
}
