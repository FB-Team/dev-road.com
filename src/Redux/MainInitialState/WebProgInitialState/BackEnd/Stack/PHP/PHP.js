import { GitHub } from '../../../../Common/Tools/commonTools';
import { PHPLavarel } from './ToolsData';
import API from '../CommonTools/API/API';
import Architectures from '../CommonTools/Architectures/Architectures';
import BasicFront from '../CommonTools/BasicFront/BasicFront';
import Cashing from '../CommonTools/Cashing/Cashing';
import DB_Back from '../CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../CommonTools/Security/Security';


const PHP = {
  name: 'PHP(Lavarel)',
  links: [],
  children: [Internet, BasicFront, PHPLavarel, DB_Back, API, GitHub, Cashing, Security, Architectures],
	conclusion: 'PHP - однозначно наиболее широко используемый яп в сервеной разработке, именно с помощью этого языка вы найдете наибольшее количество вакансий'
}

export default PHP
