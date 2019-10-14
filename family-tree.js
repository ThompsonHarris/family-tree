class FamilyTree {
  constructor(value,nodeID=1){
    if(typeof(value) !== 'string'){
      throw new 'error'
    } else {
      this.value = value
    }
    this.nodeID = nodeID
    this.children = []
}

insert(value){
  let count = this.familySize()
  this.children.push(new FamilyTree(value,count+1))
}

familySize(){
  return this.children.reduce((acc,child)=>{
    return acc+=1
  },1)
}

findMember(name){
  return this.children.find(child=>child.value===name) 
}

log(){
  let root = `-- ${this.value}\n`

  this.children.forEach(child=>{
    root += `-- -- ${child.value}\n`
      child.children.forEach(child2=>{
        root += `-- -- -- ${child2.value}\n`
      })
  })

  return root

  //recursive attempt failure :(
  // const objectLoop = (obj) =>
  // {
  //     for (var k in obj){
  //         if (typeof obj[k] == "object" && obj[k] !== null){
  //           if(typeof obj[k].value!=='undefined'){        
  //             root += `-- -- ${obj[k].value}\n`
  //           }
  //           objectLoop(obj[k]) 
  //         }else{
            
  //         }
  //     }
  // }
  // objectLoop(this.children)
}
}

//module.exports = FamilyTree;
