// let arr = [1, 2, 3, 4, 5];
// arr.shift(); // removes the first element (1)
// console.log(arr); 
// arr.unshift(-2,-1,0); // adding elements at the beginning
// console.log(arr);
// arr.splice(2, 3, 'a', 'b', 'c'); // at index 2, remove 3 elements, add 'a', 'b', 'c'
// console.log(arr);
// new_arr=arr.slice(2, 5); // creates a new array from index 2 to 5 (not including 5)
// console.log(new_arr);

// concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result); // [1, 2, 3, 4, 5, 6]

// // join
// let arr = ['Fire', 'Air', 'Water'];
// let joined = arr.join('-');
// console.log(joined); // "Fire-Air-Water"


// let arr = ['sujeet' , 'kumar' , 'singh'];
// let joined = arr.join('-');
// console.log(joined); // "sujeet-kumar-singh"

// destructuring array
// let arr = [1, 2, 3, 4, 5];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d); 


// // object destructuring
// let obj = {name: 'sujeet', age : 24, email:'sujeet@gami.com'};
// let {age , name}=obj;
// console.log(name, age);

// spread operator
// let arr1 = [1, 2, 3, 4, 5 ,6];
// let [a,b,...rest] = arr1;
// console.log(a,b,rest);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined = [...arr1,...arr2];
// console.log(combined);
// same as that of join method

// where we can use  spread operator in objects also

// let obj1 = {name: 'sujeet', age : 24};
// let result = {...obj1};
// console.log(result);

// let obj1 = {name: 'sujeet', age : 24};
// let obj2 = {email :'kumar@example.com', city: 'New York'};
// let result = {...obj1, ...obj2};
// console.log(result);

// reference data types :- () ,[], {} :- these are reference data types because they store the reference of the value in the memory not the actual value . so when we copy these reference data types to another variable it copies the reference not the actual value . so when we change the value of one variable it also changes the value of another variable because both variables are pointing to the same reference in the memory .

// let obj1 = {name: 'sujeet', age : 24};
// let obj2 = obj1; // copying the reference
// obj2.age = 30; // changing the value of obj2
// console.log(obj1.age); // 30 because both obj1 and obj2 are pointing to the same reference

// shallow copy :- to create a shallow copy of an object or array we can use the spread operator or Object.assign() method . it creates a new object or array with the same values as the original object or array but the nested objects or arrays are still pointing to the same reference in the memory .

// let obj1 = {name: 'sujeet', age : 24, address: {city: 'New York', country: 'USA'}};
// let obj2 = {...obj1}; // shallow copy using spread operator
// obj2.address.city = 'Los Angeles'; // changing the nested object
// console.log(obj1.address.city); // 'Los Angeles' because the nested object is still pointing to the same reference

// splice  vs toSpliced()
// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(1, 2);
// console.log(arr);     // [1, 4, 5]
// console.log(removed); // [2, 3]


// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.toSpliced(1, 2);
// console.log(arr);    // [1, 2, 3, 4, 5]
// console.log(newArr); // [1, 4, 5]

// | Feature                 | `splice()`        | `toSpliced()` |
// | ----------------------- | ----------------- | ------------- |
// | Modifies original array | ✅ Yes            | ❌ No        |
// | Returns                 | Removed elements  | New array     |
// | Mutability              | Mutable           | Immutable     |
// | Introduced in           | Old JS            | ES2023        |
// | Safe for React / Redux  | ❌ Not recommended|✅ Recommended|

// find , includes , sum 

let arr = [10, 20, 30, 40, 50];
// let found = arr.find(n => n > 25);
// console.log(found); 

console.log(arr.includes(30)); // true