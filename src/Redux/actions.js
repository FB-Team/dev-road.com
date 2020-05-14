/* КИРИЛЛ
  ОСНОВНЫЕ ТИПЫ СОБЫТИЙ:
1)  РЕНДЕРИНГ КОМПОНЕНТОВ ПРИ ЗАГРУЗКЕ СТРАНИЦИ - ДЕЙТСВИЕ PAGELOAD
2)  НАВИГАЦИЯ ПОЛЬЗОВАТЕЛЯ ПО КАТЕГОРИЯМ - ДЕЙСТВИЕ TRANSITION
3)  БЫСТРЫЙ ПЕРЕХОД ПО 'ХЛЕБНЫМ КРОШКАМ' - ДЕЙСТВИЕ JUMP
*/
export const PAGELOAD = 'PAGELOAD'
export const TRANSITION = 'TRANSITION'
export const JUMP = 'JUMP'

export const loadPage = () =>  return {type: PAGELOAD}

export const transfer = id =>{
  return {
    type: TRANSITION,
    id:   id
  }
}

export const jump = id =>{
  return {
    type: JUMP,
    id:   id
  }
}
