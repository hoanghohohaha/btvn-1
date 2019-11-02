// var song= document.getElementsByTagName('div');
var k= document.getElementById('song_container');
song=k.getElementsByClassName('song');

console.log(k);
var baihat = document.getElementsByClassName('song');
console.log(baihat);
var xoa= document.getElementsByClassName('button');
console.log(xoa);

for(let i = 0;i < xoa.length;i++){
    var btn=xoa[i];
    btn.addEventListener('click',function(e){
        console.log(e.target);
        var btn=e.target;
        var div= btn.parentNode;
        div.remove();
    })
    ; 
}
var ten= document.getElementsByClassName('ten');
for(let i = 0;i < ten.length;i++){
    var btn=ten[i];
    btn.addEventListener('click',function(e){
        console.log(e.target);
        var btn=e.target;
        var div= btn.parentNode;
        console.log(div.getAttribute('song_id'));
    })
    ; 
}
var more = document.getElementsByClassName('more');
for(let i = 0;i < more.length;i++){
    var btn = more[i];
    btn.addEventListener('click',function(e){
        console.log(e.target);
        var btn=e.target;
        var div= btn.parentNode;
        var name=div.getElementsByClassName('title');
        var tacgia= div.getElementsByClassName('artist');
        console.log(div);
        console.log(tacgia);
        console.log(name);
        
        console.log(name.innerText);
        console.log(tacgia.innerText);
        
    })
    ; 
}