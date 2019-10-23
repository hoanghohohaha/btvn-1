//  //1
let user = prompt("username");
console.log(user);
let gm = prompt("Gmail");

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
while(validateEmail(gm)==false){
    gm=prompt('nhap lai')  
}
console.log(gm);

function validzmk(pw){
    var patt1 = /[a-z]/g;
     return patt1.test(pw);
}   
function valid1mk(km){
    var patt2 = /[0-9]/g;
    return patt2.test(km);

}
let mk = prompt('Mat khau');

while( valid1mk(mk)==false || validzmk(mk)==false){
    mk=prompt('Vui long nhap dung cu phap');
} 
let mk1 = prompt('nhap lai makahu');
while(mk!== mk1){
    mk1=prompt('vui long nhap dung');
}
console.log(mk);






//2
let item =['a','b','c'];
let i=prompt("what do you want(C,R,D,U)?")
if(i=='R'){
    console.log(item);
}
if(i=='C'){
    let k=prompt("Name new items?");
    item.push(k);
    console.log(item);
}
if (i=='U'){
let n=prompt('Vitrimuonthaydoi');
let m= prompt('Ten do vat moi');
item[n-1]=m;
console.log(item);
}
if (i=='D'){
    let u =prompt("vitrimuonxoa");
    let y=prompt('Bac co chac k?');
    if (y=='Y') {item.splice(u-1,1);
        console.log(item);        
    } else if (y=='N'){
        console.log(item);}
        else{ console.log(item);
            }        
    }

//3
function pri(num) {
    if (num === 2) {
      return true;
    }
    if (num===3){
        return true;
    }
    else if(num > 1){
      for (var i = 2;  i < Math.sqrt(num); i++) {
        if (num % i !== 0 ) {
          return true;
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
 let dem = 1;
 let i =2;
 while(dem<=10){
    if(pri(i)==true){
        console.log(i);
        dem++;
    }  
    i++;
 }

//4
let str = prompt('noun');
function valed(){
var res = str.split("");
let chinh = ['a','o','i','u','e'];
let at ='bcdfghjklmnpqrstvwxyz';
var phu = at.split('');
for(i=0;i<res.length;i++){
    for(y=0;y< chinh.length;y++){
        if (res[i]===chinh[y]){
            console.log(res[i]);
                                }
    }
                        }
for(k=0;k<res.length;k++){
    for(x=0;x< phu.length;x++){
        if (res[k]===phu[x]){
            console.log(res[k]);
}}}}
valed(str);

//5
let k = Math.floor(Math.random()*101);
let d = prompt('doan');
console.log(k);

if (d===k){
    console.log('Pingo');
    
}
else{
    console.log('Incorrect');
    if(d<k){
        console.log('The number is greater');
        
    }else{
        console.log('the number is smaller');
        
    }
    
}