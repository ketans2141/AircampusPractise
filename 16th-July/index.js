// function charArray(str){
//     str=str.replace(/ /g,"").split('');
//     return str;
//   }
//   console.log(charArray('aircampus'))


  let string="ketan shetge"

  let count=0;
  for(let i=0;i<string.length;i++){
    if(string[i]==("a")||string[i]==("e")||string[i]==("i")||string[i]==("o")||string[i]==("u")){
        count=count+1;
    }
  }
  console.log(count);

