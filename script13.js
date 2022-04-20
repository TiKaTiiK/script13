// 1.

// let  user = {   firstname: 'giorgi',
//                 lastname: 'smith',
//                 age: 25,
//                 studentstatus: 'active'
//   };

//   console.log(user.studentstatus);

// 2.1

// let numbers = [12, 33, 24, 53, 75];

// for (let k = 0; k < numbers.length; k++) {
//     console.log(numbers[k]);
// }

// 2.2

// let numbers = [ 23, 423, 64, 2342, 23, 43, 76 ];

// let x = 0;
// while ( x < numbers.length) {
//     console.log(numbers[x]);
//     x++;
// }
  
//   3.

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let i = 0; i < numbers.length; i++)
// if (numbers[i] > 5) {
//             console.log(numbers[i]);
//         }
    
// 4.

// let user = {
// 	name: 'giorgi',
// 	age:  20,
// 	studentstatus: 'active'
// };

// if (user.age < 18 && user.studentstatus =='active') {
//     console.log('hello');
// }   
// else if (user.name == 'გიორგი') {
//     console.log('hello giorgi');
// }
// else if (user.studentstatus == 'active' || user.age < 25) {
//     console.log('hello world');
// } 
// else console.log('error')


// 5.

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

// for (let item of array) {
//     if (typeof item == 'string') {
//         console.log(item);
//     }
// }

// 6.

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ]

// for (let i = 0; i < array.length; i++)
//     for (let j = 0; j < array[i].length; j++)
//         if (array[i][j] > 0) {
//                 console.log(array[i][j]);
//             }

// 7.

// let array = [ 32, 10, 'hello', null, 'hello2', 50 ]

// for (let item of array)
//     if (typeof item == 'number' && item%5 == 0)
//     console.log(item);

// 8.

// function gamotvla (n) {
//     let jami=0;
//     for (let i = 0; i < n.length; i++) {
//         if(n[i]>0) jami+=n[i];
//     }
//     return jami;
// }

// console.log(gamotvla([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]));

// 9.

// function gamotvla (n) {
//     let jami=0;
//     for (let i = 0; i < n.length; i++) {
//          jami+=n[i];
//     }
//     return jami;
// }

// console.log(gamotvla([ 10, 50, 6, 7, 8, 11, 6, 3, 9]));


//10.

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
  
// if (user.isloggedin==true) {
//     console.log(user.firstname + ' ' + user.lastname);
// }
// if (user.isloggedin==false) {
//     console.log(false);
// }    

