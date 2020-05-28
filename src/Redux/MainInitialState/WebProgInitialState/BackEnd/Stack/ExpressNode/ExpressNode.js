import { Express } from './ToolsData';
import { GitHub } from '../../../../Common/Tools/commonTools';
import API from '../CommonTools/API/API';
import Architectures from '../CommonTools/Architectures/Architectures';
import BasicFront from '../CommonTools/BasicFront/BasicFront';
import Caching from '../CommonTools/Caching/Caching';
import DB_Back from '../CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../CommonTools/Security/Security';

const ExpressNode = {
  name: 'Node JS(Express)',
  links: [],
  children: [Internet, BasicFront, Express, DB_Back, API, GitHub, Caching, Security, Architectures],
	conclusion: 'NodeJS является удобным фреймворком для работы с frontEnd, так как использует один и тот же язык.'
}

export default ExpressNode
