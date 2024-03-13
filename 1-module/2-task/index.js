function isValid(name) {
  if ((typeof name=='string') && (name.length >= 4) && !name.includes(" ")) {
    return true;   
  }
   else return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) 
    return true;  
    else return false;  
}

sayHello();

