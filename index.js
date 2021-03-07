let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

 function clock(){
   let dates = new Date();
   let hr = dates.getHours();
   let min = dates.getMinutes();
   let sec = dates.getSeconds(); 
  

   let secondDegrees = ((sec / 60) * 360);
   let minDegrees = ((min / 60) * 360);
   let hrDegrees = ((hr / 12) * 360);
  
   if(secondDegrees === 354){
      second.style.transition ="transform";
   }if(minDegrees === 354){
       minute.style.transition ="transform";
   }if(hrDegrees === 330){
       hour.style.transition ="tranform";
   }
  

 second.style.transform=`rotate(${secondDegrees}deg)`;
 minute.style.transform=`rotate(${minDegrees}deg)`;
 hour.style.transform=`rotate(${hrDegrees}deg)`;
 
 second.textContent = `${sec}`;
 minute.textContent = `${min}`;
 }

setInterval(clock, 1000);