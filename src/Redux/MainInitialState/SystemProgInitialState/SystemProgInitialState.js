import { Firmware } from './Firmware/Firmware'


const SystemProgInitialState = {
  meta:{
    hasChildren: true,
    path: '/system-prog',
    id: 'SystemProgRedux',
  },
  data:{
    profdesc: 'Связующее звено между аппаратурой и прикладным програмным обеспечением.',
    proftitle: 'Системное программирование',

  },
  children: [Firmware]
}

export default SystemProgInitialState
