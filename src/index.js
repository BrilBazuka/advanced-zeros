module.exports = function getZerosCount(number, base) {
  let primeDeviders = [];
  for(let i = 2; i <= base; i++) {
    if(base % i == 0) {
      primeDeviders.push(i);
      base = base / i;
      i--;
    }
  }

  let uniqueDeviders = [];
  for(let i = 0; i < primeDeviders.length; i++) {
    if(primeDeviders[i] != primeDeviders[i+1]) {
      uniqueDeviders.push(primeDeviders[i]);
    }
  }

  let countArray = [];
  for(let i = 0; i < uniqueDeviders.length; i++) {
    countArray.push(primeDeviders.filter(item => item === uniqueDeviders[i]).length);
  }

  let zeroArray = [];
  for(let i = 0; i < primeDeviders.length; i++){
    if(primeDeviders[i] == primeDeviders[i-1]) continue;
    let sum = 0;
    for(let j = primeDeviders[i]; j < number; j*=primeDeviders[i]) {
      sum += Math.floor(number / j);
    }
    zeroArray.push(sum);
    sum = 0;
  }

  for(let i = 0; i < zeroArray.length; i++) {
    zeroArray[i] = Math.floor(zeroArray[i] / countArray[i]);
  }

  return Math.min(...zeroArray);
}