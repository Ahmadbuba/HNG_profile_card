const dayofWeekString = document.getElementById("dayOfWeek");
const utcmillisecondstime = document.getElementById("secondsUTC");
const now = new Date();
// utcmillisecondstime.innerHTML = new Date().getTime();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
days.forEach((day,index)=>{
    // Check if the index of day value is equal to the returned value of getDay()
    if(index == now.getDay()){
        console.log("Today is "+day);
        dayofWeekString.innerText = day

    }
        
    }
    
)
utcmillisecondstime.innerHTML = now.getTime();