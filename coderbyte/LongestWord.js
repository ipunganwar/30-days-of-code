function LongestWord(name) { 

    let long = name.replace(/[/+!@#$%^&]/g, '')
    let mostLong = long.split(' ')
    let index = 0
    
    mostLong.forEach( (item, i) => {
      if (item.length > mostLong[index].length) {
        index = i
      }
    })
    
    return mostLong[index]
           
  }
     
  // keep this function call here 
  console.log(LongestWord("Argument goes here"));                           
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                              
                              
                              
    