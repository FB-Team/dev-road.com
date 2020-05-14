import { createStore } from 'redux'
import { findComponent } from './findComponent';
import root from './components/Content/Main/MainDataRedux/MainDataRedux.js'
import {PAGELOAD, TRANSITION, JUMP, loadPage, transfer, jump} from './actions.js'

export const store = createStore(rootReducer(store))
/* КИРИЛЛ
toRender - АКТУАЛЬНАЯ КОМПОНЕНТА, ЧЬИ ПОТОМКИ ДОЛНЫ БЫТЬ ОТРЕНДЕРЕНЫ НА ЭКРАНЕ
root - ГЛАВНАЯ КОМПОНЕНТА, ЧТО БЫ БЫЛА ВОЗМОЖНОСТЬ ДОСТУПА КО ВСЕМ ДАННЫМ 'ЦЕЛИКОМ', А НЕ ТОЛЬКО К АКТУАЛЬНОЙ КОМПОНЕНТЕ
*/
store.toRender = root
store.root =     root
/* КИРИЛЛ
ПРИ ЗАГРУЗКЕ СТРАНИЦИУ ВОЗВРАЩАЕМ КОРЕННУЮ КОМПОНЕНТУ
ПРИ ПРОСТОМ ПЕРЕХОДЕ РЕНДЕРИМ ОДИН ИЗ ДОЧЕРНИХ КОМПОНЕНТОВ
ПРО ПРЫЖКЕ ИЩЕМ КОМПОНЕНТУ В ДЕРЕВЕ И ВОЗВРАЩАЕМ ЕЕ ДЛЯ РЕНДЕРИНГА
*/
function rootReducer (state, action) {
  let newState = Object.assign(state, {})
  switch (action.type) {

    case PAGELOAD:  return newState

    case JUMP:
        const result = findComponent (newState.root, action.id)
        if (!result) throw new Error('findComponent(...): NO SUCH COMPONENT FOUND!')
        newState.toRender  = result
    return newState

    case TRANSITION:
        if (state.currentComponent.children)
          newState.toRender = state.currentComponent.children[action.id]

    default: return newState
  }
}
