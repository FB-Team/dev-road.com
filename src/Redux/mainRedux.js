import { createStore } from 'redux'
import { findComponent } from './findComponent';
import root from '../components/Content/Main/MainDataRedux/MainDataRedux.js'
import * as actions from './actions.js'
/* КИРИЛЛ
toRender - АКТУАЛЬНАЯ КОМПОНЕНТА, ЧЬИ ПОТОМКИ ДОЛНЫ БЫТЬ ОТРЕНДЕРЕНЫ НА ЭКРАНЕ
root - ГЛАВНАЯ КОМПОНЕНТА, ЧТО БЫ БЫЛА ВОЗМОЖНОСТЬ ДОСТУПА КО ВСЕМ ДАННЫМ 'ЦЕЛИКОМ', А НЕ ТОЛЬКО К АКТУАЛЬНОЙ КОМПОНЕНТЕ
*/
let initialState = {}
initialState.toRender = root
initialState.root =     root
const store = createStore(rootReducer)
/* КИРИЛЛ
ПРИ ЗАГРУЗКЕ СТРАНИЦИУ ВОЗВРАЩАЕМ КОРЕННУЮ КОМПОНЕНТУ
ПРИ ПРОСТОМ ПЕРЕХОДЕ РЕНДЕРИМ ОДИН ИЗ ДОЧЕРНИХ КОМПОНЕНТОВ
ПРИ ПРЫЖКЕ ИЩЕМ КОМПОНЕНТУ В ДЕРЕВЕ И ВОЗВРАЩАЕМ ЕЕ ДЛЯ РЕНДЕРИНГА
*/
function rootReducer (state = initialState, action) {
   let newState = Object.assign(state, {})
  switch (action.type) {
    case actions.PAGELOAD:
      return state

    case actions.JUMP:
        const result = findComponent (newState.root, action.id)
        if (!result) throw new Error('findComponent(...): NO SUCH COMPONENT FOUND!')
        newState.toRender  = result
    return newState

    case actions.TRANSITION:
        if (state.toRender.children)  newState.toRender = state.toRender.children[action.id]
        return newState

    default: return state
  }
}
export default store
