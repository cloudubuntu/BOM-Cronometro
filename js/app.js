let hours=0;
let minits=0;
let seconds=0;
let siv;

let p=document.querySelector('#p');


function init(){
    time();
    siv=setInterval(time, 999);
    
}

function time(){
    let hax, max, sax;
    //p.innerHTML=`00 : 00 : 00 `;
    seconds++;
    if(seconds>59){
        minits++;
        seconds=0;
    }
    if(minits>59){
        hours++;
        minits=0;
    }

    if(hours>24){
        hours=0;
    }

    if(seconds<10){
        sax='0'+seconds;
    }else{
        sax=seconds;
    }

    if(minits<10){
        max='0'+minits;
    }else{
        max=minits;
    }

    if(hours<10){
        hax='0'+hours;
    }else{
        hax=hours;
    }

    p.innerHTML=`${hax} : ${max} : ${sax}`;
}


function reset(){
    hours=0;
    minits=0;
    seconds=0;
    p.innerHTML=`0${hours} : 0${minits} : 0${seconds}`;
}


function pause(){
    window.clearInterval(siv);
}