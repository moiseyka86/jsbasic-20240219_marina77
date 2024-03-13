let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sum=0;
  for (let n in salaries) {
    if ((typeof salaries[n]=='number') && isFinite(salaries[n])){
      sum=sum + salaries[n];  
      }
      return sum;   
  }  
}
sumSalary(salaries);
