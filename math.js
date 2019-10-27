setTimeout(() => {
    document.getElementById('main').style.display='block';
    document.getElementById('loadercontainer').style.display='none';
},2000);
var a = Math.floor(Math.random() * 10) + 1;
var b = Math.floor(Math.random() * 10) + 1;
var c = Math.floor(Math.random() * 20) + 1;
var op = [ "+",  "-"][Math.floor(Math.random()*2)];
var op1 = [ " ",  "-"][Math.floor(Math.random()*2)];
var o = eval(op1+c)
document.getElementById('mathcontainer').textContent= a + ' ' + op + ' '  + b + ' = ' + op1 + c;
var point = 0;
var dem;
var timetime;
function reset_animation() {
    var el = document.getElementById('timebar');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null; 
  }
function randommath(){
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    var c = Math.floor(Math.random() * 20) + 1;
    var op = [ "+",  "-"][Math.floor(Math.random()*2)];
    var op1 = [ " ",  "-"][Math.floor(Math.random()*2)];
    var o = eval(op1+c)
    dem=Math.floor(Math.random()*2+1);
    if(dem==1){
        o = eval(a + op + b);
    }
    console.log('dem'+dem);
    document.getElementById('mathcontainer').textContent= a + ' ' + op + ' '  + b + ' = ' + o;
    return a,b,c,dem,o;
}

function time(){
    timetime = setTimeout(() => {
            document.getElementById('timebar').style.animationName='none'
            document.getElementById('gameovercontainer').style.display='block';
            document.getElementById('forgame').style.display='none';
        }, 10000);}
 
        
function play(){
    point = 0;
    clearTimeout(timetime);
    document.getElementById('point').textContent="Point:"+ point;
    document.getElementById('main').style.display='none';
    document.getElementById('loadercontainer').style.display='flex';
    document.getElementById('gameovercontainer').style.display='none';
    setTimeout(() => {
        document.getElementById('loadercontainer').style.display='none';
    },2000);
    setTimeout(() => {
        document.getElementById('forgame').style.display='block';
    }, 2000);
    randommath();
    document.getElementById('timebar').style.animationName='time1';
    time();
    reset_animation();
}

  

function true1(){
    if (dem==1){
        clearTimeout(timetime);
        time();
        reset_animation();
        randommath();
        point++;
        console.log(point); 
        document.getElementById('point').textContent="Point:"+ point;

    }else{
        document.getElementById('gameovercontainer').style.display='block';
        document.getElementById('forgame').style.display='none';
        document.getElementById('gameovertextcontain').innerHTML="Gameover<br> "+point;
        point=0;
        console.log(point);
        
    }
}
function false1(){
    if (dem!=1){
        clearTimeout(timetime);
        time();
        reset_animation();
        randommath();
        point++;
        console.log(point); 
        document.getElementById('point').textContent="Point:"+ point;

    }else{
        document.getElementById('gameovercontainer').style.display='block';
        document.getElementById('gameovertextcontain').innerHTML="Gameover<br> "+ point;
        document.getElementById('forgame').style.display='none';
        point=0;
        console.log(point);
    }
}
function home(){
    document.getElementById('main').style.display='block';
    document.getElementById('loadercontainer').style.display='none';
    document.getElementById('gameovercontainer').style.display='none';
    document.getElementById('forgame').style.display ='none';
    point = 0;
    clearTimeout(timetime);

}

