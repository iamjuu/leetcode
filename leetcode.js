// sum problem 

// const num = [2,7,11,15]
// const target = 26

//     for(let i = 0; i < num.length; i++){
//         for(let j = i+1; j < num.length; j++){
//             if(num[i] + num[j] === target){
//            const result = [i,j]
// console.log(result,'result');

//             }
//         }

//     }



// palidorm 

// const num = [1, 2, 3, 2, 1];

// function isPalindrome(arr) {
//   return arr.join('') === arr.reverse().join('');
// }

// console.log(isPalindrome(num)
// );


// greatest Number
// const num = [10,30,20,50,60,70]

// for (i=0;i<num.length;i++){
//     if(num[i]< 50){
//         console.log(num[i]);
        
//     }
// }

// unique number 
// const num = [2, 2, 3, 5, 8];
// const uniqueNumbers = [];
// for (let i = 0; i < num.length; i++) {
//     let isUnique = true; 
//     for (let j = 0; j < num.length; j++) {
//         if (i !== j && num[i] === num[j]) {
//             isUnique = false;
//             break; 
//         }
//     }
//     if (isUnique) {
//         uniqueNumbers.push(num[i]);
//     }
// }
// console.log("Unique numbers:", uniqueNumbers);


// give the same array Element copy in same arrray\
//  input [1,2,3]
//  output [1,2,3,1,2,3]

const a=[1,2,3]
function double(){
const first = a;
const second = a;
const res = first.concat(second)
return res;
    
}
double()





