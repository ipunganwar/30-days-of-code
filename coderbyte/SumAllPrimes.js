function sumAllPrimes (num) {
  let total = 0;
  
  function checkPrime (i) {
    for ( let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false
      }
    } 
    return true
  }
  
  for( let i = 2; i <= num; i++){
    if (checkPrime(i)) {
      total += i
    }
  }
  
  console.log(total)
}

sumAllPrimes(10)
sumAllPrimes(20)
sumAllPrimes(100)

