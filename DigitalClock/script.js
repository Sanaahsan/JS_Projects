function updateClock(){
     const now = new Date();
     let hours =now.getHours();
     const meridiam= hours>=12? "PM":"AM"//if hours>12 then PM otherwise AM
     hours = hours%12||12;
     hours=hours.toString().padStart(2,0);

     const minutes= now.getMinutes().toString();
     const seconds = now.getSeconds().toString();
     const timeString=`${hours}:${minutes}:${seconds} ${meridiam}`;
     document.getElementById("clock").textContent=timeString;
    //  toString().padStart(2,0)-- this is to be used when we need 2 places for digits(eg. 8:1:31 will become 08:01:31)

}

updateClock();
setInterval(updateClock,1000);//will update time every 1s
