const backEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/back',
    id: 'backEnd',
  },
  data:{
    profdesc: 'Довольно востребованное направление, отличается высокой универсальностю, хотя порог вхождения может быть выше, чем у front-end разработчика',
    proftitle: 'Back-end',

  },
  children: []
}

const frontEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/front',
    id: 'frontEnd',
  },
  data:{
    profdesc: 'Отличный порог входа, множество курсов и учебных материалов, большое количество вакантных мест',
    proftitle: 'Front-end',

  },
  children: []
}


const WebProgRedux = {
  meta:{
    hasChildren: true,
    path: '/web-prog',
    id: 'WebProgRedux',
  },
  data:{
    profdesc: 'Написание сайтов и веб приложений.',
    proftitle: 'Сетевое (Веб) программирование',

  },
  children: [frontEnd, backEnd]
}

export default WebProgRedux
