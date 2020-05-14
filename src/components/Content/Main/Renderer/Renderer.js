function Renderer (component, name) {
  if (component.children[0].meta.hasChildren){
      let result = component.children.map(() =>{
        return <Route path=/>
      })
  }
return (
<div className={name}>
  <Route exact path={'/'} component={StartProg}/>
</div>
)
}
