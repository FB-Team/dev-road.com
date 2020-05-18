// КИРИЛЛ РЕКУРСИВНАЯ ФУНКЦИЯ ПОИСКА НУЖНОЙ КОМПОНЕНТЫ
export function findComponent (root, path){
    let result = null

    if (path === root.meta.path) {
      result = root
      return result
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
          if (root.children[i].meta.path !== path) {
            result = findComponent(root.children[i], path)
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
