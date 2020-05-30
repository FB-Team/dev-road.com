
import { GitHub } from '../../../../Common/Tools/commonTools';
import { Kotlin, Patterns, Android, XML, DB } from './Android'

const AndroidBranch = {
  name: 'Android(Kotlin)',
  links: [],
  children: [Kotlin, GitHub, Patterns, Android, XML, DB],
	conclusion: 'Kotlin является молодым языком, который упрощает разработку приложений с более простыми и понятными конструкциями, чем в Java. В общем плане разработка на устройства Android является более простой, чем на устройства под управлением IOS.'
}
export default AndroidBranch
