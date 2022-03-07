//  1 - EXERCISE 

// let n = 100;

// for (let i = 1; i <= n; i++){
//   if (n % i == 0){
//     console.log(i);
//   } 
// }


//  2 - EXERCISE 

// let n = 30;
// let count = 0;

// for (let i = 1; i <= n; i++){
//   if (n % i == 0){
//     count +=i;
//   } 
// }
// console.log(count);


//  3 - EXERCISE 

// let n = 5;
// let count = 0;

// for (let i = 1; i < n; i++){
//   if (n % i == 0){
//     count +=i;
//   }
// }
// if (count == n){
//   console.log('Mukammal son');
// }
// else{
//   console.log('Mukammal son emas');
// }


// 4 - EXERCISE 

// let n = 100;

// for (let i = 1; i < n; i++){
//   let count = 0;
//   for (let j = 1; j < i; j++){
//     if (i % j == 0){
//       count +=j;
//     }
//   }
//   if (count == i){
//     console.log(i);
//   }
// }


//  5 - EXERCISE 

// let n = 30;

// for (let i = 1; i <= n; i++){
//   if (i % 3 == 0 && i % 5 != 0){
//     console.log(i);
//   }
// }


//  6 - EXERCISE

// function isprime(n){
//   if (n < 2){
//     return 'tub emas';
//   }
//   for (let i = 2; i < n; i++){
//     if (n % i === 0){
//       return 'tub emas';
//     }
//   }
//   return 'tub';
// }
// console.log(isprime(7));


// 7 - EXERCISE 

// let n = 15;

// for (let i = 2; i < n; i++){
//   let value = 1;
//   for (let j = 2; j < i; j++){
//     if (i % j == 0){
//       value = 0;
//     }
//   }
//   if (value){
//     console.log(i);
//   }
// }

// let n = 5;
// let count = 1;
// console.log(2 ** n); 
// for (let i = 1; i <= n; i++) {
//   count *= i;
// }
// console.log(count);


// let n = prompt('Enter your age');

// let welcome =
//  n >= 18 
//  ? () => alert('Hello world')
//  :  ()=> alert('Goodbye'); 

//  welcome();

 




// let b = [1,2,3,4,5];

// for (let i = 0; i < b.length; i++){
//   let s = 0;
//   for (let j = 2; j < b[i]; j++){
//     if (b[i] % j == 0){
//       s++;
//     }
//   }
//   if (s == false){
//     console.log(b[i]);
//   }
// }


// let a = [2,4,55,67,78];
// let empty = [];
// for (let i = 1; i < a.length; i++){
//   let c = 0;
//   if (a[i] % 2 == 0){
//     empty+=c;
//   }
// }
// console.log(empty.length);