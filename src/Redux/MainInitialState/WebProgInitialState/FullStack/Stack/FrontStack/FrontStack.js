import { Webpack } from '../../../FrontEnd/WebInstruments/WebInstruments';
import Frameworks from '../../../FrontEnd/Frameworks/Frameworks';
import Javascript from '../../../FrontEnd/Javascript/Javascript';
import Layout from '../../../FrontEnd/Layout/Layout';

const FrontStack = {
  name: "FrontEnd",
  links: [{
    name: "Руководство по Redux",
    target: "https://tproger.ru/translations/redux-for-beginners/"
  }],
  children: [Layout, Javascript, Frameworks, Webpack],
  conclusion: ''
}
export default FrontStack
