import QAEngeneer from './QAEngeneer/QAEngeneer';

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
    children: [QAEngeneer]
}
export default OtherProg
