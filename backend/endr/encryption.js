
exports.facileEn=(pass)=>{
    
    let cpy="";
    for(let i=0;i<pass.length;i++){
      let n=pass.charCodeAt(i);
      if(i%2==0 || i==0){
          if(n>=65 && n<=90){
            n=n+32;
          }
          n=n+i;
      }
      else{
        if(n>=97 && n<=122){
          n=n-32;
        }
        n=n+i;
      }
      cpy=cpy+(String.fromCharCode(n));
    }
    
    return {
      password:cpy,

    };
}
exports.facileDe=(pass)=>{
  
  let cpy="";
  for(let i=0;i<pass.length;i++){
    let n=pass.charCodeAt(i);
    if(!i%2==0 || !i==0){
      
      n=n-i;
      if(n>=65 && n<=90){
        n=n+32;
      }
  }
  else{
    n=n-i;
    if(n>=97 && n<=122){
      n=n-32;
    }
    
  }
  
    cpy=cpy+(String.fromCharCode(n));
 
    
  }
  
  return {
    password:cpy,
    
  };
}

