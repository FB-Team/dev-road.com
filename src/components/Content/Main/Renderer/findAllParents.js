export function findAllParents(child){
  let current = child
if (current.parent){
let parents = []
while (current.parent){
  current = current.parent
  parents.push({path: current.meta.path, title: current.data.proftitle})
}
return parents
}else return []
}
