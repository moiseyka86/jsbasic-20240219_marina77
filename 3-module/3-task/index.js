
function camelize(str){
  let massiv1=str.split('-'); 
  
  let massiv2 = massiv1.map((item, index) => {
  if (index>0) return item[0].toUpperCase() + item.slice(1);  
  else return item;       
  });  
  let newStr = massiv2.join(''); 
  return(newStr); 
}

camelize('background-color'); 
camelize('list-style-image'); 
camelize('-webkit-transition'); 