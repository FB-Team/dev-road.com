import CNET from './CNET/CNET';
import CPlusQt from './CPlusQt/CPlusQt';
import Java from './Java/Java';
import JsElectron from './JsElectron/JsElectron';

const Desktop = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/desktop'
  },
  data:{

  },
  children: [
CNET,
CPlusQt,
Java,
JsElectron
  ]
}
export default Desktop
