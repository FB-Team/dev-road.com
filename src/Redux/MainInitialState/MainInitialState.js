
import ApplicationProgInitialState from './ApplicationProgInitialState/ApplicationProgInitialState.js';
import SystemProgInitialState from './SystemProgInitialState';
import WebProgInitialState from './WebProgInitialState';
//КИРИЛЛ ДОБАВИЛ БЕКСЛЭШ В СВОЙСТВО PATH, ДОБАВИЛ СВОЙСТВО ID В META
const Root = {
    meta: {
      hasChildren: true,
      isRoot:      true,
      path:        '/',
      id:          'root'
    },
    data:{},
    children: [ApplicationProgInitialState, SystemProgInitialState, WebProgInitialState]
}
export default Root
