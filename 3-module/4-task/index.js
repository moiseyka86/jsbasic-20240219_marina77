// Объекты всех пользователей
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,825.66",
  "picture": "https://placehold.it/32x32",
  "age": 16,
  "name": "Silver Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$1,825.67",
  "picture": "https://placehold.it/32x32",
  "age": 35,
  "name": "Tin Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2, user3];
 
function showSalary(users, age){
  let userFilterAge = users.filter(item => item.age <= age);
  let userNameBalance = userFilterAge.map(item => item.name + " " + item.balance);
  let userStr=userNameBalance.join('\n');
  return userStr; 
};