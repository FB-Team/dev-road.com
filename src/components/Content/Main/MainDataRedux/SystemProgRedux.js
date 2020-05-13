const oS = {
    meta: {
    hasChildren: false,
    path: '/system-prog/os'
  },
  data:{
    profdesc: 'разработка Windows, Linux ядра и тд',
    proftitle: 'Операционная система',
    resume: {}
  },
  children: []
}

const additionalSoftware = {
    meta: {
    hasChildren: false,
    path: '/system-prog/additional-software'
  },
  data:{
    profdesc: 'надстройки ПО',
    proftitle: 'Дополнительное системное ПО',
    resume: {}
  },
  children: []
}

const firmware = {
    meta: {
    hasChildren: false,
    path: '/system-prog/firmware'
  },
  data:{
    profdesc: 'Разработка драйверов и тд',
    proftitle: 'Встроенное программное обеспесчение',
    resume: {}
  },
  children: []
}

const SystemProgRedux = {
  meta:{
    hasChildren: true,
    path: '/system-prog'
  },
  data:{
    profdesc: 'Связующее звено между аппаратурой и прикладным програмным обеспечением.',
    proftitle: 'Системное программирование',
    resume: {}
  },
  children: [oS, additionalSoftware, firmware]
}

export default SystemProgRedux
