    document.getElementById('box1info').style.display='none';
    document.getElementById('box2info').style.display='none';
    document.getElementById('box3info').style.display='none';
    document.getElementById('box4info').style.display='none';
setTimeout(() => {
    document.getElementById('mainclass').style.display='flex';
    document.getElementById('boxcontain').style.display='flex';
    document.getElementById('navbar').style.display='flex';
    document.getElementById('loadingcontain').style.display='none';
},2000);
function back(){
    document.getElementById('mainclass').style.display='flex';
    document.getElementById('boxcontain').style.display='flex';
    document.getElementById('navbar').style.display='flex';
    document.getElementById('box1info').style.display='none';
    document.getElementById('box2info').style.display='none';
    document.getElementById('box3info').style.display='none';
    document.getElementById('box4info').style.display='none';
}
function box1(){
    document.getElementById('loadingcontain').style.display="flex";
    document.getElementById('mainclass').style.display='none';
    document.getElementById('boxcontain').style.display='none';
    document.getElementById('navbar').style.display='none';
    setTimeout(() => {
        document.getElementById('box1info').style.display='flex';
        document.getElementById('loadingcontain').style.display='none';
    },1000);
}
function box3(){
    document.getElementById('loadingcontain').style.display="flex";
    document.getElementById('mainclass').style.display='none';
    document.getElementById('boxcontain').style.display='none';
    document.getElementById('navbar').style.display='none';
    setTimeout(() => {
        document.getElementById('box3info').style.display='flex';
        document.getElementById('loadingcontain').style.display='none';
    },1000);
}
function box2(){
    document.getElementById('loadingcontain').style.display="flex";
    document.getElementById('mainclass').style.display='none';
    document.getElementById('boxcontain').style.display='none';
    document.getElementById('navbar').style.display='none';
    setTimeout(() => {
        document.getElementById('box2info').style.display='flex';
        document.getElementById('loadingcontain').style.display='none';
    },1000);
}
function box4(){
    document.getElementById('loadingcontain').style.display="flex";
    document.getElementById('mainclass').style.display='none';
    document.getElementById('boxcontain').style.display='none';
    document.getElementById('navbar').style.display='none';
    setTimeout(() => {
        document.getElementById('box4info').style.display='flex';
        document.getElementById('loadingcontain').style.display='none';
    },1000);
}