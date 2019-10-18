//1
// let soso= prompt('Hello');Array(soso);
// let setA = ('ueoai')
// let setB = ('bcdfg')
// let setC = ('hjklm');
// let setD = ('npqrstvwxyz');
// let x1 ='A';
// let x2 ='B';
// let x3 = 'C';
// let x4 = 'D';


// function ahoho(a,b,c){
//     Array(b);
//     let x = b.length; let i=0;
//     while (i<x){
//         i++;
//             if (soso[0]===b[i]){
//                 console.log (c);
//                 break;

//             }
//     }
    
// }

// ahoho(soso,setA,x1);
// ahoho(soso,setB,x2);
// ahoho(soso,setC,x3);
// ahoho(soso,setD,x4);

//2
// let grade;
// let score = prompt('Diem');
// if (25 < score && score <= 30) {grade = 'A'};
// if (20 < score && score<= 25) { grade = 'B'};
//  if (15 < score && score<= 20){ grade = 'C'};
//  if (10 < score && score<= 15) {grade = 'D'};
//  if (5 < score && score<= 10) { grade = 'E'};
//  if (0 < score && score<= 5) { grade = 'F'};
//  if ( score > 25) { grade = 'Vui long nhap dung diem cua minh'};

// console.log(grade);

//3
let nums= [2,3,4,5,1,2,6,7,9,9,10,11,11];
var max = Math.max.apply(null, nums);
let o= nums.length; let i=0;
while (i<=o){
    i+1;
    
     if (nums[i] == max){
        //nums.splice(nums[i],1);
        //nums.splice(nums.indexOf(max),1);
        delete nums[i];
        // break;

    }
} 
max= Math.max.apply(null,nums); 
console.log(nums);
