import QAEngeneer from './QAEngeneer/QAEngeneer';
import Desktop from './Desktop/DesktopRedux';

const OtherProg = {
    meta: {
      hasChildren: true,
      path: '/other',
      id: 'OtherProgRedux'
    },
    data:{
      proftitle: 'Остальное',
      profdesc: 'Профессии, которые не относятся прямо к программированию, либо не рекоммендуются для старта в IT'
    },
    children: [QAEngeneer, Desktop]
}
export default OtherProg
