var timer = 60;

var score = 0;

var hitrn = 0;

function incresescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
 


function gethit(){
    hitrn =  Math.floor(Math.random()*10);
     document.querySelector("#hitt").textContent = hitrn ;
 }

function mybubble(){
    var vishal = " ";

for (var i= 0; i<=150; i++){

   var a =  Math.floor(Math.random()*15)
   vishal += `<div class="bubble">${a}</div>`;
         
}

document.querySelector(".pbotom") .innerHTML = vishal;
}


function runtime(){
    var vish = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        }else{
            setInterval(vish);
            document.querySelector(".pbotom").innerHTML =`<h1>Geme Over</h1>`;
        }
       
    },1000)
}

var  add = document.querySelector(".pbotom");
add.addEventListener("click",(dets)=>{
   var clicknum = Number(dets.target.textContent);
   if(clicknum === hitrn){
    incresescore();
    mybubble();
    gethit();
   }
});


gethit();

runtime();

mybubble();
