/* КИРИЛЛ
  ОСНОВНЫЕ ТИПЫ СОБЫТИЙ:
1)  НАВИГАЦИЯ ПОЛЬЗОВАТЕЛЯ ПО КАТЕГОРИЯМ - ДЕЙСТВИЕ TRANFER
2)  ПЕРЕХОД ПО УКАЗАННОМУ URL - ДЕЙСТВИЕ JUMP
*/
export const TRANSFER = 'TRANSFER'
export const JUMP = 'JUMP'

export const transfer = id =>({
    type: TRANSFER,
    id
})

export const jump = path =>({
    type: JUMP,
    path:   path
})
