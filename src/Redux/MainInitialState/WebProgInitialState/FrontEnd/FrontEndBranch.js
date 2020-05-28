import {
  GitHub,
} from '../../OtherProgInitialState/Desktop/Stack/CNET/ToolsData';
import Frameworks from './Frameworks/Frameworks';
import Javascript from './Javascript/Javascript';
import Layout from './Layout/Layout';
import Theory from './Theory/Theory';
import WebInstruments from './WebInstruments/WebInstruments';

const FrontEndBranch = {
  name:"Фронтенд",
  links:[],
  children: [Layout, Javascript, Frameworks, Theory, WebInstruments,GitHub],
  conclusion: ''
}
export default FrontEndBranch
