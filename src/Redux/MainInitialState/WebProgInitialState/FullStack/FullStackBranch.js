import { GitHub } from '../../Common/Tools/commonTools';
import BackStack from './Stack/BackStack/BackStack';
import CMS from './Stack/CMS/CMS';
import FrontStack from './Stack/FrontStack/FrontStack';
import Theory from './Stack/Theory/Theory';

const FullStackBranch = {
  name: "Fullstack",
  links: [],
  children: [FrontStack, BackStack, Theory, CMS, GitHub],
  conclusion: ''
}
export default FullStackBranch
