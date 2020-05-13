
import ApplicationProgRedux from './ApplicationProgRedux/ApplicationProgRedux';
import SystemProgRedux from './SystemProgRedux';
import WebProgRedux from './WebProgRedux';


const root = {
    meta: {
      hasChildren: true,
      isRoot:      true,
      path:        ''
    },
    data:{

    },
    children: [ ApplicationProgRedux, SystemProgRedux, WebProgRedux ]
}
