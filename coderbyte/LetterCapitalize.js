function LetterCapitalize(str) { 

    let words = str.split(' ')
     
     for( let i=0; i < words.length; i++){
       let temp = words[i][0].toUpperCase();
       words[i] = temp + words[i].slice(1)
     }
     
     return words.join(' ')
            
   }
      
   // keep this function call here 
   console.log(LetterCapitalize("argument goes here"))
   console.log(LetterCapitalize("hello world"))
   console.log(LetterCapitalize("namanya siapa"))