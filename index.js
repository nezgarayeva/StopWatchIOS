var saat=document.querySelector('.saat')
var deq=document.querySelector('.deq')
var san=document.querySelector('.san')
var reset=document.querySelector('.reset')
var start=document.querySelector('.start')
var dayan=document.querySelector('.stop')
var lap=document.querySelector('.lap')
var yeniler=document.querySelector('.yeniler')
var sanCounter=0
var deqCounter=0
var saatCounter=0
    //  start buttonu
start.onclick=function(){
dayan.style.display='flex'
lap.style.display='flex'
reset.style.display='none'
start.style.display='none'

    
 var x= setInterval( function(){
    //  lap buttonu

   sanCounter++
   san.innerText=sanCounter
   if(sanCounter<10){
    san.innerText='0'+sanCounter
   }
   if(deqCounter<10){
    deq.innerText='0'+deqCounter
   }
   if(saatCounter<10){
    saat.innerText='0'+saatCounter
   }
if(sanCounter==60){
    deqCounter++
    sanCounter=0
    deq.innerText=deqCounter
}
if(deqCounter==60){
    saatCounter++
    deqCounter=0
    saat.innerText=saatCounter
}
lap.onclick=function(){
var li=document.createElement('li')
san.innerText=sanCounter
saat.innerText=saatCounter
deq.innerText=deqCounter
li.innerText=` Saat: ${saatCounter} Deqiqe: ${deqCounter} Saniye: ${sanCounter}`
yeniler.prepend(li)

}
 },1000) 


    // Reset buttonu
reset.onclick=function(){
    clearInterval(x)
    sanCounter=0
    deqCounter=0
    saatCounter=0
    san.innerText='0'+sanCounter
    deq.innerText='0'+deqCounter
    saat.innerText='0'+saatCounter

}
    // Stop buttonu
dayan.onclick=function(){
clearInterval(x)
start.style.display='flex'
dayan.style.display='none'
reset.style.display='flex'
lap.style.display='none'
}


}  
  






