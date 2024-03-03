function isValid(name) {
  if ((name.length >= 4) && !name.includes(" ")) {
    return true;   
  }
   else return false;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    alert(`Welcome back, ${userName}!`);
  } else {
    alert('Некорректное имя');
  }
}

sayHello();

