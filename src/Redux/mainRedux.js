import { createStore } from 'redux'
import { findComponent } from './findComponent';
import Root from './MainInitialState/MainInitialState'
import * as actions from './actions.js'
/* КИРИЛЛ
toRender - АКТУАЛЬНАЯ КОМПОНЕНТА, ЧЬИ ПОТОМКИ ДОЛНЫ БЫТЬ ОТРЕНДЕРЕНЫ НА ЭКРАНЕ
Root - ГЛАВНАЯ КОМПОНЕНТА, ЧТО БЫ БЫЛА ВОЗМОЖНОСТЬ ДОСТУПА КО ВСЕМ ДАННЫМ 'ЦЕЛИКОМ', А НЕ ТОЛЬКО К АКТУАЛЬНОЙ КОМПОНЕНТЕ
*/
let initialState = {}
initialState.toRender = Root
initialState.Root = Root
const store = createStore(rootReducer)
/* КИРИЛЛ
ПРИ ЗАГРУЗКЕ СТРАНИЦИУ ВОЗВРАЩАЕМ КОРЕННУЮ КОМПОНЕНТУ
ПРИ ПРОСТОМ ПЕРЕХОДЕ РЕНДЕРИМ ОДИН ИЗ ДОЧЕРНИХ КОМПОНЕНТОВ
ПРИ ПРЫЖКЕ ИЩЕМ КОМПОНЕНТУ В ДЕРЕВЕ И ВОЗВРАЩАЕМ ЕЕ ДЛЯ РЕНДЕРИНГА
*/
/* Михаил
  state не должен изменяться внутри функции rootReducer
*/
function rootReducer(state = initialState, action) {
  let newToRender
  switch (action.type) {
    case actions.PAGELOAD:
      return state

    case actions.JUMP:
      newToRender = findComponent(state.Root, action.id)
      if (!newToRender) throw new Error('findComponent(...): NO SUCH COMPONENT FOUND!')
      return {
        ...state,
        toRender: newToRender
      }

      case actions.TRANSITION:
        newToRender = state.toRender.children.find(child => child.meta.id === action.id)
        if (!newToRender) throw new Error('actions.TRANSITION: NO SUCH CHILD FOUND!')
        return {
          ...state,
          toRender: newToRender
        }

        default:
          return state
  }
}
export default store
