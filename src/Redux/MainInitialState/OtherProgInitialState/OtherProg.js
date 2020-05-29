import { Firmware } from './Firmware/Firmware';
import Desktop from './Desktop/DesktopRedux';
import QAEngeneer from './QAEngeneer/QAEngeneer';

const OtherProg = {
    meta: {
      hasChildren: true,
      path: '/other',
      id: 'OtherProgRedux'
    },
    data:{
      proftitle: 'Остальное',
      profdesc: 'Профессии, которые не относятся прямо к программированию, либо не рекоммендуются для старта в IT',
      imgPath: 'https://ru.bitdegree.org/rukovodstvo/wp-content/uploads/2018/08/what-is-a-web-developer.jpg'
    },
    children: [QAEngeneer, Desktop, Firmware]
}
export default OtherProg
