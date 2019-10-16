// //1 
  let p = prompt("NAME");
  let k = prompt( "AGE");
  console.log(p + " is " + k + " years old");

// //2 
let a = prompt("a");
let b = prompt("b");
let c = prompt('c');
let delta= b*b - 4*a*c;
if(delta<0){
    console.log("Phuong trinh vo nghiem");
}
else if (delta==0)
    {   let x = -b/ 2 /a;
        console.log("Phuong trinh co mot nghiem duy nhat " + x );
    }
else if (delta>0){
    let x1 = (-b + Math.sqrt(delta))/2/a;
    let x2 = (-b - Math.sqrt(delta))/2/a;
    console.log('Phuong trinh co 2 nghiem la '+ x1 + ' va '+x2);
    
} 
else {
    console.log('vui long nhap so chinh xac');
    
}
//3 
let y= prompt('Năm');
if (y%4 != 0 ){
    console.log('Its not a leap year');
    }
else if (y%4==0){
    if (y%100!=0){
        console.log("Its a leap year")
    }
    if (y%100==0){
        if (y%400==0){
            console.log('Its a lap year');
            
        }
        else{console.log('Its not a lap year');
    }
    } 
}
else {
    console.log('Vui long nhap dung nam');
    
}