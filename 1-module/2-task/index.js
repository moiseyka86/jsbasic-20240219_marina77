function isValid(name) {
  if ((name.length >= 4) && !name.includes(" ") && (typeof name=='string')) {
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

