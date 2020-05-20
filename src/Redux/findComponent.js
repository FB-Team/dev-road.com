// КИРИЛЛ РЕКУРСИВНАЯ ФУНКЦИЯ ПОИСКА НУЖНОЙ КОМПОНЕНТЫ
// М: Возможен поиск по path, id
export function findComponent (root, typeValue, type="path"){
    let result = null

    if (typeValue === root.meta[type]) {
      result = root
      return result
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
          if (root.children[i].meta[type] !== typeValue) {
            result = findComponent(root.children[i], typeValue, type)
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
