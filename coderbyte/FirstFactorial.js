function FirstFactorial(num, total=1) { 

    if (num === 1) {
      return total
    }
    
    total = total * num; 
    return FirstFactorial(num - 1, total)
           
  }
     
  // keep this function call here 
  console.log(FirstFactorial(8)) // 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
  console.log(FirstFactorial(3)) // 3 * 2 * 1 
  console.log(FirstFactorial(4))    // 4 * 3 * 2 * 1 