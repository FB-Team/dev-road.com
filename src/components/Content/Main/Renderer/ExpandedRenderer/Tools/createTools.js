function createTools(root){
 let wrapper = document.createElement('ul')
debugger
 wrapper.after(root.name)
 root.children.forEach((child) => {
   let li = document.createElement('li')
   if (child.children){
     li.after(child.name)
     li.append(createTools(root.child))
   }else li.innerHTML = child.name
     wrapper.append(li)
 })
return wrapper
}
export default createTools
