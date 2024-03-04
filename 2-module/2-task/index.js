let obj ={
  name: 'Иван',
  fam: 'Иванов',
  age:'23',  
}
function isEmpty(obj) {
 let massiv= Object.keys(obj)
 if (massiv.length == 0) return true
  else return false;
}
isEmpty(obj);
