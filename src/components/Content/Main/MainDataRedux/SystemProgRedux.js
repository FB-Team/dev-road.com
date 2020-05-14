const OS = {
    meta: {
    hasChildren: false,
    path: '/system-prog/os',
    id: 'OS',
  },
  data:{
    profdesc: 'разработка Windows, Linux ядра и тд',
    proftitle: 'Операционная система',

  },
  children: []
}

const additionalSoftware = {
    meta: {
    hasChildren: false,
    path: '/system-prog/additional-software',
    id: 'additionalSoftware',
  },
  data:{
    profdesc: 'надстройки ПО',
    proftitle: 'Дополнительное системное ПО',

  },
  children: []
}

const firmware = {
    meta: {
    hasChildren: false,
    path: '/system-prog/firmware',
    id: 'firmware',
  },
  data:{
    profdesc: 'Разработка драйверов и тд',
    proftitle: 'Встроенное программное обеспесчение',

  },
  children: []
}

const SystemProgRedux = {
  meta:{
    hasChildren: true,
    path: '/system-prog',
    id: 'SystemProgRedux',
  },
  data:{
    profdesc: 'Связующее звено между аппаратурой и прикладным програмным обеспечением.',
    proftitle: 'Системное программирование',

  },
  children: [OS, additionalSoftware, firmware]
}

export default SystemProgRedux
