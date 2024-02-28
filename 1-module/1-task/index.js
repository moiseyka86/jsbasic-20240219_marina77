function factorial(n) {
  let fac=1;
  for(let i=1; i<=n; i++){    
    fac=fac*i;
  }
   console.log("факториал " + n + " равен " + fac);
}
factorial(0); 
factorial(1);
factorial(3); 
factorial(5);
