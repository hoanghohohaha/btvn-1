document.getElementById('loadingcontain').style.display='block';
setTimeout(() => {
    document.getElementById('home').style.display='block';
    document.getElementById('loadingcontain').style.display='none';
    document.getElementById('gameovercontain').style.display='none'
},2000);
var rightcolor;
var wrongcolor1;
var r;
var g;
var b;

function randomcolor(){
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    document.getElementById('content').textContent='rgb=('+r+','+g+','+b+')';
    rightcolor= 'rgb('+r+','+g+','+b+')';
    console.log(rightcolor);
    return rightcolor;
}
randomcolor();
randomwrongcolor();
console.log(rightcolor);

var ball=document.getElementsByClassName('ball');
var score= 0;

function reset(){
    Ballindex= Math.floor(Math.random()*3);
    console.log(Ballindex);
    randomcolor();
    for(i=0;i<ball.length;i++){
        if ( i == Ballindex){
            ball[i].style.backgroundColor= rightcolor;
        }else{
            randomwrongcolor();
            console.log(wrongcolor);
            ball[i].style.backgroundColor= wrongcolor;
        }
    }
}

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
        document.getElementById('maincontain').style.display='flex';
    }, 2000);
    randomcolor();
    reset();
}

function home(){
    document.getElementById('home').style.display='block';
    document.getElementById('loadingcontain').style.display='none';
    document.getElementById('gameovercontain').style.display='none';
    document.getElementById('maincontain').style.display ='none';
    point = 0;
}
function randomwrongcolor(){
    r1 =r +Math.floor(Math.random()*100)-50;
    g1 =g +Math.floor(Math.random()*100)-50;
    b1 =b +Math.floor(Math.random()*100)-50;
    wrongcolor='rgb('+r1+','+g1+','+b1+')';
    return wrongcolor;
}

function gameover(){
    document.getElementById('gameovercontain').style.display='flex';
    document.getElementById('maincontain').style.display ='none';
    document.getElementById('loadingcontain').style.display='none';
}

var Ballindex= Math.floor(Math.random()*3);
var ball = document.getElementsByClassName('ball');
console.log(ball);


for(i=0;i<ball.length;i++){
    var btn=ball[i];
    btn.addEventListener('click',function(e){
        console.log(e.target);
        k=e.target.getAttribute('index');
        console.log(k);
        if(k ==Ballindex){
            score++;
            console.log(score);
            document.getElementById('score').textContent="SCORE:"+ score;
            reset();
        }else{
            document.getElementById('gameover').innerHTML="Gameover<br>"+ score;
            score= 0;
            document.getElementById('gameovercontain').style.display='flex';
            document.getElementById('maincontain').style.display='none';
            
        }
    })
    ; 
}