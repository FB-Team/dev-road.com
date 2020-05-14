import Android from './Android/Android';
import IOS from './IOS/IOS';

const Mobile = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/mobile',
    id: 'Mobile'
  },
  data:{

  },
  children: [
    Android,
    IOS
  ]
}
export default Mobile
