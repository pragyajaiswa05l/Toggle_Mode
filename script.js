'use strict'
var container = document.getElementById('container');
var heading = document.getElementById('heading');

var bar = document.getElementById('bar');
var btn_left = document.getElementById('toggle_btn_left');
var btn_right = document.getElementById('toggle_btn_right');
var i = 0;
bar.addEventListener('click',function(){
    if(i==0){
        i++;
        console.log(i);
        container.style.backgroundColor="black";
        heading.style.color="white";
        bar.style.borderColor="white";
        //btn0.style.backgroundColor="white";
        btn_right.style.backgroundColor="white";
    }
    else if(i==1){
        i--;
        console.log(i);
        container.style.backgroundColor="white";
        heading.style.color="black";
        bar.style.borderColor="black";
        btn_left.style.backgroundColor="black";
       // btn1.style.backgroundColor="black";
    }
});