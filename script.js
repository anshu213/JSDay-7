//...........................Array.........................................//.........................
//.............arr.length.....................
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//...............pushfunction......................

let arr1 = ["Hello", "I am web developer"];
arr1.push("& designer too");
console.log(arr1);

//................slice.......................

let arr2 = ["Hello", "This is", "Anshuman"];
let res = arr2.slice(1, 2);
console.log(res); 

//.......................Tostring.....................
//.........Convert array to string.........

let arr3 = ["Hello", "This is", "Anshuman"];
let res1 = arr3.toString();
console.log(res1); 

//................Shift.....................
//Used to remove the first element of an array.........//

const arr4 = ["Hello", "This is", "Anshuman"];
 arr4.shift();
console.log(arr4); 

//................Map.................................

let arr5 = [1, 2, 3, 4, 5];
let res2 = arr5.map((b) => b - 2);
console.log(res2);

//..............Pop.................................//..........
//Used to remove the last element of an array.........//
const arr6 = ["Hello", "This is", "Anshuman"];
 arr6.pop();
console.log(arr6); 

//.................Filter.........................

const arr7 = ["Hello", "This is", "Anshuman"];
 let res3 = arr7.filter(word => word.length > 6);
console.log(res3); 

//...........find............

let arr8 = [1, 2, 3, 4, 5];
let res4 = arr8.find(x => x == 2);
console.log(res4);

//.............findIndex......................//................

let arr9 = [1, 2, 3, 4, 5];
let res5 = arr9.findIndex(x => x == 5);
console.log(res5);

//...............include..........//..........

let arr10 = [1, 2, 3, 4, 5];
let res6 = arr10.includes(5);
console.log(res6);

//............reverse...............//...........

let arr11 = [1, 2, 3, 4, 5];
let res7 = arr11.reverse();
console.log(res7);

//..........Unshift...................//......

const arr12 = [ "This is", "Anshuman"];
 arr12.unshift("Hello");
console.log(arr12); 

//...........Delete................//.........

let arr13 = [1, 2, 3, 4, 5];
let res8 = delete(arr13[4]);
console.log(arr13);
 
 


