let newstr;
function truncate(str, maxlength) {  
  if (str.length>maxlength) {
    newstr = str.slice(0, (maxlength-1)) + "…";
  }
  else newstr=str;
  return newstr;
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Всем привет!', 20);