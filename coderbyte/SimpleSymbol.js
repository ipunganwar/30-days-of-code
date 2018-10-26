function SimpleSymbols(str) { 

    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        return false;
    }
  //   else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
  //       return false;
  //   }
    else {
     return true; 
    }
           
  }
     
  // keep this function call here 
  console.log(SimpleSymbols("+d===+a+"))
  console.log(SimpleSymbols("+a="))
  console.log(SimpleSymbols("+a="))
  console.log(SimpleSymbols("+d+=3=+s+"))
  console.log(SimpleSymbols("f++d+"))