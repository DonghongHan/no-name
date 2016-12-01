var container = document.querySelector('.container');
var img = document.querySelector('.images');
var button = document.querySelector('.but');
var pre = document.querySelector('#lefta');
var next = document.querySelector('#righta');
var i = 1;
var timer;
var flag=1;

var a = function(){
    flag = 0;
    function go(){
        if(parseInt(img.style.left)>-220*(i+1)  /*|| img.style.left==""*/){
            img.style.left = parseInt(img.style.left)-10+"px";
            setTimeout(go,22);
        }
        else{
            flag=1;
            var prediv = document.querySelector(".b"+i);
            prediv.style.background = "rgba(0,0,0,0.5)";
            if(++i==12) i=1;
            img.style.left = -220*i+"px";
            var prediv = document.querySelector(".b"+i);
            prediv.style.background = "rgba(100,200,200,1)";
        }
    }

    go();
}
next.addEventListener("click",function(){
if(flag==1) a();

});


var b = function(){
    flag = 0;
    function go(){
        
        if(parseInt(img.style.left)<-220*(i-1)){
            img.style.left = parseInt(img.style.left)+10+"px";
            setTimeout(go,22);
        }
        else{
            flag=1;
            var prediv = document.querySelector(".b"+i);
            prediv.style.background = "rgba(0,0,0,0.5)";
            if(--i==0) i=11;
            img.style.left = -220*i+"px";
            var prediv = document.querySelector(".b"+i);
            prediv.style.background = "rgba(100,200,200,1)";
        }
    }
    go();

}







pre.addEventListener("click",function(){

    if(flag==1) b();

});


var c = function(event){
    var prediv = document.querySelector(".b"+i);
    prediv.style.background = "rgba(0,0,0,0.5)";
    var x = event.target;
    var y = x.className.replace(/[^0-9]+/g, '');
    var z = parseInt(y);
    var time = 220;
    var interval = 10;
    var speed = 220/(time/interval);

    x.style.background = "rgba(100,200,200,1)";
    flag=0;
    function go(){
        if(z<i){
            if(parseInt(img.style.left)<-220*z){
                img.style.left = parseInt(img.style.left)+speed+"px";
                setTimeout(go,interval);
            }
            else{
                flag=1;
                i = z;
                img.style.left = -220*z+"px";
            }
        }
        else
        {
            if(parseInt(img.style.left)>-220*z){
                img.style.left = parseInt(img.style.left)-speed+"px";
                setTimeout(go,interval);
            }
            else{
                flag=1;
                i = z;
                img.style.left = -220*z+"px";
            }
        }
    }
    go();




}




button.addEventListener("click",function(){
    if(flag==1)
    {
        c(event);
    }

});



var play = function(){
    timer = setInterval(function(){
        a();
    },3000);
}

var stop = function(){
    clearInterval(timer);
}

container.addEventListener("mouseenter",stop);
container.addEventListener("mouseleave",play);
