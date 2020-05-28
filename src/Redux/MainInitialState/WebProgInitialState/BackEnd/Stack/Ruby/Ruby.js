import { GitHub } from '../../../../Common/Tools/commonTools';
import { RubyRails } from './ToolsData';
import API from '../CommonTools/API/API';
import Architectures from '../CommonTools/Architectures/Architectures';
import BasicFront from '../CommonTools/BasicFront/BasicFront';
import Cashing from '../CommonTools/Cashing/Cashing';
import DB_Back from '../CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../CommonTools/Security/Security';


const Ruby = {
  name: 'Ruby(Rails)',
  links: [],
  children: [Internet, BasicFront, RubyRails, DB_Back, API, GitHub, Cashing, Security, Architectures],
	conclusion: 'Ruby является очень удобным для использования человеком языком программирования. При переходе с него на другой язык обычно возникают сложности.'
}

export default Ruby
