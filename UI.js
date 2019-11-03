document.getElementById('loadingcontain').style.display='block';
setTimeout(() => {
    document.getElementById('home').style.display='block';
    document.getElementById('loadingcontain').style.display='none';
    document.getElementsByTagName('gameovercontain').style.display='none'
},2000);
var rightcolor;
function randomcolor(){
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    document.getElementById('content').textContent='rgb=('+r+','+g+','+b+')';
    rightcolor= 'rgb('+r+','+g+','+b+')';
    console.log(rightcolor);
    return rightcolor;
}
randomcolor();
console.log(rightcolor);

document.getElementsByClassName('ball').style.backgroundColor=rightcolor;
var score= 0;

function play(){
    score = 0;
    document.getElementById('score').textContent="SCORE:"+ score;
    document.getElementById('home').style.display='none';
    document.getElementById('loadingcontain').style.display='block';
    document.getElementById('gameovercontain').style.display='none';
    setTimeout(() => {
        document.getElementById('loadingcontain').style.display='none';
    },2000);
    setTimeout(() => {
        document.getElementById('maincontain').style.display='block';
    }, 2000);
    randomcolor();
}

function home(){
    document.getElementById('home').style.display='block';
    document.getElementById('loadingcontain').style.display='none';
    document.getElementById('gameovercontain').style.display='none';
    document.getElementById('maincontain').style.display ='none';
    point = 0;
}
function randomwrongcolor(){
    var r1 = r + Math.floor(Math.random()*100)-50;
    var g1 = g + Math.floor(Math.random()*100)-50;
    var b1 = b + Math.floor(Math.random()*100)-50;

    var r2 = r + Math.floor(Math.random()*100)-50;
    var g2 = g + Math.floor(Math.random()*100)-50;
    var b2 = b + Math.floor(Math.random()*100)-50;

    return r1,g1,b1,r2,g2,b2;
}

function gameover(){
    document.getElementById('gameovercontain').style.display='block';
}

var Ballindex= Math.floor(Math.random()*3)+1;
var ball = document.getElementsByClassName('ball');
for(i=0;i<=ball.length;i++){
    if ( i == Ballindex){
        ball[i].style.backgroundColor=rightcolor;
    }
}