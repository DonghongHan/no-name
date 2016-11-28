var container = document.querySelector('.container');
var img = document.querySelector('.images');
var button = document.querySelector('.but');
var pre = document.querySelector('#lefta');
var next = document.querySelector('#righta');
var i = 0;

next.addEventListener("click",function(){
    if(++i==11) i=0;
    img.style.left = -220*i+"px";
});

pre.addEventListener("click",function(){
    if(--i==-1) i=10;
    img.style.left = -220*i+"px";
});

button.addEventListener("click",function(event){
    var prediv = document.querySelector(".b"+i);
    prediv.style.background = "rgba(0,0,0,0.5)";
    var x = event.target;
    var y = x.className.replace(/[^0-9]+/g, '');
    i = y;
    img.style.left = -220*i+"px";
    x.style.background = "rgba(100,200,200,1)";
});