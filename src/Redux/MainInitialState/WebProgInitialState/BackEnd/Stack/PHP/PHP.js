import { GitHub } from '../../../../Common/Tools/commonTools';
import { PHPLavarel } from './ToolsData';
import API from '../CommonTools/API/API';
import Architectures from '../CommonTools/Architectures/Architectures';
import BasicFront from '../CommonTools/BasicFront/BasicFront';
import Caching from '../CommonTools/Caching/Caching';
import DB_Back from '../CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../CommonTools/Security/Security';


const PHP = {
  name: 'PHP(Lavarel)',
  links: [],
  children: [Internet, BasicFront, PHPLavarel, DB_Back, API, GitHub, Caching, Security, Architectures],
	conclusion: 'PHP - однозначно наиболее широко используемый ЯП в серверной разработке, именно с помощью этого языка вы найдете наибольшее количество вакансий'
}

export default PHP
