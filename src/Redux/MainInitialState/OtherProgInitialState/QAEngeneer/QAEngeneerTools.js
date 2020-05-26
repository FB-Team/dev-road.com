
const QATheory = {
  name: 'Теория',
  links: [
    {
      name: 'Обеспечение качества',
      target: 'https://cs.petrsu.ru/~kulakov/courses/testing/lectures/09.quality.pdf'
    },
    {
      name: 'Процесс тестирования',
      target: 'https://qalight.com.ua/baza-znaniy/fundamentalnyiy-protsess-testirovaniya/'
    },
    {
      name: 'Виды тестирования',
      target: 'http://www.protesting.ru/testing/testtypes.html'
    },{
      name: 'Уровни тестирования',
      target: 'http://www.protesting.ru/testing/testlevels.html'
    },{
      name: 'Автоматизация тестирования',
      target: 'https://www.a1qa.ru/blog/avtomatizatsiya-testirovaniya-ot-a-do-ya-chast-1/'
    },{
      name: 'Метрики в тестировании',
      target: 'http://tmguru.ru/baza-znanij/protsess-testirovaniya/monitoring-kontrol/metriki-v-testirovanii/'
    }
  ],
  children: []
}

const Redmine = {
  name: 'Redmine',
  links: [
    {
      name: 'Оф. документация',
      target: 'https://www.redmine.org/projects/redmine/wiki/RusGuide'
    },
    {
      name: 'Обучение Redmine',
      target: 'https://www.youtube.com/watch?v=k9o_VmsEGgo'
    },
    {
      name: 'Для чего нужна программа и практическое применение',
      target: 'https://infostart.ru/public/815261/'
    },{
      name: 'Жизненный цикл задач',
      target: 'https://habr.com/ru/post/227507/l'
    }
  ],
  children: []
}

const Jira = {
  name: 'Jira',
  links: [
    {
      name: 'Jira. Оф. руководство',
      target: 'https://www.atlassian.com/ru/software/jira/guides'
    },
    {
      name: 'Обучение Jira[часть 1]',
      target: 'https://www.youtube.com/watch?v=ciyEh6K1uN4'
    },
    {
      name: 'Обучение Jira[часть 2]',
      target: 'https://www.youtube.com/watch?v=_zQHR0uRUcY'
    },{
      name: 'Туториал',
      target: 'https://bytextest.ru/2018/08/31/jira-dlya-novichkov/'
    }
  ],
  children: []
}

const BugTracker = {
  name: 'Bug tracking system(Выбираем одну систему)',
  links: [{
    name: "Wiki",
    target: "https://ru.wikipedia.org/wiki/Система_отслеживания_ошибок"
  }],
  children: [Redmine, Jira]
}

const Qtest = {
  name: 'QTest',
  links: [
    {
      name: 'Краткое руководство',
      target: 'https://coderlessons.com/tutorials/kachestvo-programmnogo-obespecheniia/uznaite-qtest/qtest-kratkoe-rukovodstvo'
    },
    {
      name: 'Official training videos',
      target: 'https://www.qasymphony.com/video-training/qtest/enduser/getting-started-with-qtest-test-manager-tool/'
    }
  ],
  children: []
}

const TestRail = {
  name: 'TestRail',
  links: [
    {
      name: 'Official tutorial',
      target: 'https://www.gurock.com/testrail/videos/introduction-projects'
    },
    {
      name: 'Another tutorial',
      target: 'https://www.tutorialspoint.com/testrail/testrail_introduction.htm'
    },
    {
      name: 'Гайд',
      target: 'https://bytextest.ru/2018/04/12/testrail-user-guide/'
    }
  ],
  children: []

}

const TestManagement = {
  name: 'Test Management(выбираем одну систему)',
  links: [
    {
      name: 'Wiki',
      target: 'https://ru.wikipedia.org/wiki/Системы_управления_тестированием'
    },

  ],
  children: [Qtest, TestRail]

}

export const QAEngeneerTools = {
	name: 'QAEngeneer',
	links: [],
	children: [QATheory, BugTracker, TestManagement],
	conclusion: ''
}
