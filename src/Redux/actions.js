/* КИРИЛЛ
  ОСНОВНЫЕ ТИПЫ СОБЫТИЙ:
1)  РЕНДЕРИНГ КОМПОНЕНТОВ ПРИ ЗАГРУЗКЕ СТРАНИЦИ - ДЕЙТСВИЕ LOAD_PAGE
2)  НАВИГАЦИЯ ПОЛЬЗОВАТЕЛЯ ПО КАТЕГОРИЯМ - ДЕЙСТВИЕ TRANFER
3)  БЫСТРЫЙ ПЕРЕХОД ПО 'ХЛЕБНЫМ КРОШКАМ' - ДЕЙСТВИЕ JUMP
*/
export const LOAD_PAGE = 'LOAD_PAGE'
export const TRANSFER = 'TRANSFER'
export const JUMP = 'JUMP'
export const LOAD_TOOLS = 'LOAD_TOOLS'

export const loadPage = () =>  ({type: LOAD_PAGE})

export const transfer = id =>({
    type: TRANSFER,
    id
})

export const jump = path =>({
    type: JUMP,
    path:   path
})
export const loadTools = id => (
  {
    type: LOAD_TOOLS,
    id
  }
)
