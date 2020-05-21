export const ChildFirst =  {
  name: 'ChildFirst',
  links:[{
    name: 'ChildFirstLinkname',
    target: '#'
  }],
  children: []
}
export const ChildSecond =  {
  name: 'ChildSecond',
  links:[{
    name: 'ChildSecondLinkname',
    target: '#'
  }],
  children: [ChildFirst]
}
export const ChildThirst =  {
  name: 'ChildThirst',
  links:[{
    name: 'ChildThirstLinkname',
    target: '#'
  }],
  children: [ChildFirst]
}
