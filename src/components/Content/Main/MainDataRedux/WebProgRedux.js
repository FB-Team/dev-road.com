const backEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/back'
  },
  data:{
    profdesc: 'Довольно востребованное направление, отличается высокой универсальностю, хотя порог вхождения может быть выше, чем у front-end разработчика',
    proftitle: 'Back-end',
    resume: {}
  },
  children: []
}

const frontEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/front'
  },
  data:{
    profdesc: 'Отличный порог входа, множество курсов и учебных материалов, большое количество вакантных мест',
    proftitle: 'Front-end',
    resume: {}
  },
  children: []
}


const WebProgRedux = {
  meta:{
    hasChildren: true,
    path: '/web-prog'
  },
  data:{
    profdesc: 'Написание сайтов и веб приложений.',
    proftitle: 'Сетевое (Веб) программирование',
    resume: {}
  },
  children: [oS, additionalSoftware, firmware]
}

export default WebProgRedux
