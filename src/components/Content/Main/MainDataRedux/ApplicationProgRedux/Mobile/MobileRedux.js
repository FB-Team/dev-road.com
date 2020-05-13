import Android from './Android/Android';
import IOS from './IOS/IOS';

const Mobile = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/mobile'
  },
  data:{

  },
  children: [
    Android,
    IOS
  ]
}
export default Mobile
