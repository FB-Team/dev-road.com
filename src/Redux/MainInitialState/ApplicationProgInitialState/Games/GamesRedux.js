import Gamedesigner from './Gamedesigner/Gamedesigner';
import GraphicsDeveloper from './GraphicsDeveloper/GraphicsDeveloper';
import Modeller from './3DModeller/Modeller';
import QAEngeneer from './QAEngeneer/QAEngeneer';
import TechnicalArtist from './TechnicalArtist/TechnicalArtist';
import VHFArtist from './VHFArtist/VHFArtist';

const Games = {
  meta: {
    hasChildren: true,
    path:        '/application-prog/games',
    id: 'Games'
  },
  data:{
    proftitle: "Игры",
    profdesc: "Популярное и высокооплачеваемое направлением в IT индустрии"
  },
  children: [
      Modeller,
      Gamedesigner,
      GraphicsDeveloper,
      QAEngeneer,
      TechnicalArtist,
      VHFArtist
  ]
}
export default Games