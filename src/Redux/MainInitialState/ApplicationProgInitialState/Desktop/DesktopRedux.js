import CNET from './CNET/CNET';
import CPlusQt from './CPlusQt/CPlusQt';
import Java from './Java/Java';

const Desktop = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/desktop',
    id: 'Desktop'
  },
  data:{
    proftitle:"Десктопная разработка",
    profdesc:"Довольно востребованное направление, имеет отличный порог входа"
  },
  children: [
CNET,
CPlusQt,
Java
  ]
}
export default Desktop
