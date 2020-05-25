 const findLinks = (tools, name) => {
   if (tools.name === name) return tools.links
      if (tools.children.length > 0){
        for (let i= 0; i < tools.children.length; i++){
        let result = findLinks(tools.children[i], name)
        if (result) return result
      }
    }else return null
}

export default findLinks
