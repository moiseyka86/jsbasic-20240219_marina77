function getMinMax(str) {
  let strMassiv=str.split(' ');
  let numMassiv=strMassiv.filter(item => !isNaN(item));
  let max=Math.max(...numMassiv);
  let min=Math.min(...numMassiv);
  let minMax={
    max,
    min
  }
  return(minMax);
}
getMinMax('1 и -5.8 или 10 хотя 34 + -5.3 и 73 9');
