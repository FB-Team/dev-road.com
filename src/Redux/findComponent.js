// КИРИЛЛ РЕКУРСИВНАЯ ФУНКЦИЯ ПОИСКА НУЖНОЙ КОМПОНЕНТЫ
export function findComponent (root, id){
    let result = null

    if (id === root.meta.id) {
      result = root
      return result
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
          if (root.children[i].meta.id !== id) {
            result = findComponent(root.children[i], id)
            if (result) return result
          }
          else {
            result = root.children[i]
            return result
          }
      }
    }
    return null
}
