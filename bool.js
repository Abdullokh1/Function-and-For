
// BOOL 11

// function isOdd(a,b){
//   if (a % 2 == 0 && b % 2 != 0){
//     return true;
//   }
//   else if (a % 2 != 0 && b % 2 == 0){
//     return true;
//   }
//   else if (a % 2 !=0 && b % 2 != 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

// console.log(isOdd(5,8));


// BOOL 12


// function Length(n){
//   if (n >= 10 && n < 100){
//     return true;
//   }
//   else if(n >= 100){
//     console.log('Katta xonali son');
//   }
//   else {
//     return false;
//   }
// }

// console.log(Length(12));


// BOOL 13


// function Length(n){
//   if (n >= 100 && n <= 999){
//     return true;
//   }
//   else if(n >= 1000){
//     console.log('Katta xonali son');
//   }
//   else {
//     return false;
//   }
// }

// console.log(Length(123));


// BOOL 14


// function Same(a){
//     let b,c,d;
//     b = Math.floor(a % 10);
//     c = Math.floor(a / 10);
//     if (b == c){
//       return true;
//     }
//     else if (a >= 100){
//       return 'Invalid number';
//     }
//     else{
//       return false;
//     }
// }
// console.log(Same(12));



// BOOL 15

// function Sum(a){
//   let b,c,sum;
//   b = Math.floor(a % 10);
//   c = Math.floor(a / 10);
//   sum = b+c;
//   if (sum % 2 == 0){
//     return true;
//   }
//   else if (a >= 100){
//     console.log('Invalid number');
//   }
//   else{
//     return false;
//   }
// }
// console.log(Sum(31));



// BOOL 16


// function Sum(a){
//   let b,c,sum;
//   b = Math.floor(a % 10);
//   c = Math.floor(a / 10);
//   sum = b+c;
//   if (sum % 2 != 0){
//     return true;
//   }
//   else if (a >= 100){
//     console.log('Invalid number');
//   }
//   else{
//     return false;
//   }
// }
// console.log(Sum(22));



// BOOL 19

// let a = 54321;
// let c = 0;
// let b = true;

// while (a) {
//   let num = a % 10;
//   a = Math.floor(a / 10);
//   if(num < c) {
//     b = false;
//     break
//   }
//   else{
//     c = num;
//   }
// }
// console.log(b);


// BOOL 24


// let a = -1;
// let b = 2;
// let c = 1;
// let plus = 0;

// if (a >= 0){
//   plus++;
// }
//  if  (b >= 0){
//   plus++;
// }
//  if  (c >= 0){
//   plus++;
// }
// console.log(plus);


// BOOL 25

// let a = 1;
// let b = 2;
// let c = 1;
// let plus = 0;
// let minus = 0;


// if (a >= 0){
//   plus++;
// }
// else{
//   minus++;
// }
//  if  (b >= 0){
//   plus++;
// }
// else{
//   minus++;
// }
//  if  (c >= 0){
//   plus++;
// }
// else{
//   minus++;
// }
// console.log(`Musbat sonlar: ${plus} || Manfiy sonlar ${minus}`);


// BOOL 26


// let a = 10;
// let b = 10;
// let bigger;
// let small;

// if (a > b){
//   bigger = a;
// }
// if (b < a){
//   small = b;
// }
// if (b > a){
//   bigger = b;
// }
// if (a < b){
//   small = a;
// }
// if (a == b){
//   console.log('Teng');
// }
// console.log(bigger, small);