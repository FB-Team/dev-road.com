

const Python = {
  name: 'Python',
  links: [
    {
      name: 'Python база',
      target: 'https://medium.com/nuances-of-programming/изучение-python-от-нуля-до-мастера-13751b663d2f'
    },
    {
      name: 'Metanit',
      target: 'https://metanit.com/python/tutorial/'
    }

  ],
  children: []
}

const Django = {
  name: 'Django',
  links: [
    {
      name: 'Metanit',
      target: 'https://metanit.com/python/django/'
    },
    {
      name: 'Django документация',
      target: 'https://docs.djangoproject.com/en/3.0/'
    },
  ],
  children: []
}



export const PythonDjango = {
  name: 'Python & Django',
  links: [],
  children: [Python, Django]
}
