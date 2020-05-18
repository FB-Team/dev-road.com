/* КИРИЛЛ
  ОСНОВНЫЕ ТИПЫ СОБЫТИЙ:
1)  РЕНДЕРИНГ КОМПОНЕНТОВ ПРИ ЗАГРУЗКЕ СТРАНИЦИ - ДЕЙТСВИЕ PAGELOAD
2)  НАВИГАЦИЯ ПОЛЬЗОВАТЕЛЯ ПО КАТЕГОРИЯМ - ДЕЙСТВИЕ TRANSITION
3)  БЫСТРЫЙ ПЕРЕХОД ПО 'ХЛЕБНЫМ КРОШКАМ' - ДЕЙСТВИЕ JUMP
*/
export const PAGELOAD = 'PAGELOAD'
export const TRANSFER = 'TRANSFER'
export const JUMP = 'JUMP'

export const loadPage = () =>  ({type: PAGELOAD})

export const transfer = path =>({
    type: TRANSFER,
    id:   path
})

export const jump = path =>({
    type: JUMP,
    id:   path
})
