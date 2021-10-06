//1
function fact(num)
 {
 let b = 2;
 let factors =1;
 if(num==b){
      return b;
    }
    while (num > b){
      if(num % b == 0)
   {
   factors +=','+b;
   }
 b++;
   }
   factors +=','+num;
   return factors;
 }
 console.log('Version 1')
console.log(fact(1234));
//2
const getFactors2 = num => [...Array(num + 1).keys()].filter(i=>num % i === 0);
console.log('Version 2')
console.log(getFactors2(1234).join(','))