export function findAllParents(child){
if (child.parent){
let parents = []
while (child.parent){
  child = child.parent
  parents.push({path: child.meta.path, title: child.data.proftitle})
}
return parents
}else return {}
}
