import { Circuit } from './Circuit/Circuit';
import { Instruments } from './Instruments/Instruments';
import { Soldering } from './Soldering/Soldering';
import { Interfaces } from './Interfaces/Interfaces';

export const Electronics = {
  name: 'Электроника',
  links: [
    {
      name: 'Язык программирования С',
      target: 'https://ru.b-ok2.org/book/2951572/b0a340'
    },
    {
      name: 'Онлайн курс по С',
      target: 'https://ru.hexlet.io/courses/introduction_to_c'
    },
    {
      name: 'Пример кода для программирования микроконтроллеров',
      target: 'https://radioded.ru/osnovy-yazyka-si-dlya-mikrokontrollerov/'
    }
  ],
  children: [Circuit, Soldering, Instruments, Interfaces]
}
