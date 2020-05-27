import { GitHub } from '../../../Desktop/Stack/CNET/ToolsData';
import Architectures from './Architectures/Architectures';
import CocoaPods from './CocoaPods/CocoaPods';
import CoreData from './CoreData/CoreData';
import Optional from './Optional/Optional';
import Swift from './Swift/Swift';
import UIKit from './UIKit/UIKit';

const IOSBranch = {
  name: "Разработка под IOS",
  links:[],
  children: [Swift, UIKit, CoreData, CocoaPods, Architectures,GitHub,Optional],
  conclusion: ''
}
export default IOSBranch
