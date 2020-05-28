import API from '../../../BackEnd/Stack/CommonTools/API/API';
import Architectures from
  '../../../BackEnd/Stack/CommonTools/Architectures/Architectures';
import Caching from '../../../BackEnd/Stack/CommonTools/Caching/Caching';
import DB_Back from '../../../BackEnd/Stack/CommonTools/DB_Back/DB_Back';
import Internet from '../../../FrontEnd/Theory/Internet/Internet';
import Security from '../../../BackEnd/Stack/CommonTools/Security/Security';

const Theory = {
  name: "Теоретическая база",
  links: [],
  children: [Architectures, Caching, DB_Back, API, Security, Internet],
  conclusion: ''
}
export default Theory
