import Android from './Android/Android';
import IOS from './IOS/IOS';

const Mobile = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/mobile',
    id: 'Mobile'
  },
  data:{
    proftitle:"Мобильная разработка",
    profdesc:"Отличается высокой универсальностю и стандартизированностью, отличный порог входа"
  },
  children: [
    Android,
    IOS
  ]
}
export default Mobile
