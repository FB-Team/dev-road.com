import DesktopRedux from './Desktop/DesktopRedux';
import GamesRedux from './Games/GamesRedux';
import MobileRedux from './Mobile/MobileRedux';

const ApplicationProgRedux = {
    meta: {
      hasChildren: true,
      path:        '/application-prog'
    },
    data:{

    },
    children: [
      DesktopRedux,
      GamesRedux,
      MobileRedux
    ]
}
