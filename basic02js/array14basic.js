const myArr=[1,2,3,4,5];

console.log(myArr);
const myArr2= new Array(0,1,2,3,4,5);
console.log(myArr2);

//array method
myArr.push(6);
myArr2.push(6);
myArr.pop();
myArr.unshift(9);//add started of the array
myArr.shift();// delete the started of array
 console.log(myArr.includes(9));
 console.log(myArr.indexOf(9));
//  console.log(myArr2.find);
console.log(myArr);
console.log(myArr2);
const newArray=myArr.join();
console.log(myArr);
console.log(newArray);
console.log(typeof newArray)


//                       slice,splice
console.log("A",myArr);
let newarr = myArr.slice(1,3);
console.log("B",newarr);

let newarr1=myArr.splice(1,3);
console.log("D",myArr);
console.log("C",newarr1);
