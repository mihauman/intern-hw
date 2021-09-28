//1
let arr1 =[1, 2, 3, 3, 'a', 'test'];
let arr2 =['test', 2, 7,  'a', 'a'];
let arr3;
let q = 1;
let m = 0;
let item;
function yourFunc(a, b, c) {
    let result = [];
    for(let akey in a) {
      let found = false;
      for(let bkey in b) {
        if(a[akey] == b[bkey]){
          found = false;
        }
        else{
         arr3 = [].concat(a,b);
         break;
        }
      }
    }
    for (let i=0; i<arr3.length; i++)
{
    for (let j=i; j<arr3.length; j++)
    {
            if (arr3[i] == arr3[j])
             m++;
            if (q<m)
            {
              q=m; 
              item = arr3[i];
            }
    }
    m=0;
}
console.log(item);
  }

yourFunc(arr1, arr2);
//2
function yourFunc2(arr) {
    for (q=1, i=1; q<arr.length; ++q) {
      if (arr[q] !== arr[q-1]) {
        arr[i++] = arr[q];
      }
    }
  
    arr.length = i;
    console.log(arr);
  }
yourFunc2(arr1);
//3
let arrRound = [111896, 9999, 9985, 1024, 999999, 1000100, 60044943];
function numbFormat(arr) {
let arrSort=[];
for(i=0;i<arr.length;i++){

  if (Number(arr[i]) >= 1.0e+9) {
    arrSort[i]=(Number(arr[i]) / 1.0e+9).toFixed(2)  + " B";
    arr.push(arrSort[i]);
  }

  else if (Number(arr[i]) >= 1.0e+6) {
    arrSort[i]=(Number(arr[i]) / 1.0e+6).toFixed(2)  + " M";
    arr.push(arrSort[i]);
  }

  else if(Number(arr[i]) >= 1.0e+3) {
    arrSort[i]=(Number(arr[i]) / 1.00e+3).toFixed(2)  + " K";
    arr.push(arrSort[i]);
  }
}
console.log(arrSort);
}
numbFormat(arrRound);
