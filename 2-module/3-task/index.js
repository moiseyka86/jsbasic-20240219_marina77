let calculator = {
  read: function(a, b) {
    this.a=a,
    this.b=b
  },
  sum: function(){
    return(this.a + this.b);     
  },
  mul:function(){
    return(this.a * this.b);   
  }
};

calculator.read(3, 5);
calculator.sum(); 
calculator.mul(); 
