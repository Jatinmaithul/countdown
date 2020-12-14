var daysE = document.getElementById('days');
var hoursE = document.getElementById('hours');
var minsE = document.getElementById('mins');
var secondsE = document.getElementById('seconds');
const newYear = "1 Jan 2022";
 function Countdown() {
   const newYearDate = new Date(newYear);
   const currentDate = new Date();
   var seconds = (newYearDate-currentDate)/1000;


   const days = Math.floor(seconds/(24*3600));
   seconds = seconds % (24*3600);
   const hours = Math.floor(seconds/3600);
   seconds = seconds % 3600;
   const mins = Math.floor(seconds/60);
   seconds = seconds % 60;
   const sec =  Math.floor(seconds);

   daysE.innerHTML = days;
   hoursE.innerHTML = formatTime(hours);
   minsE.innerHTML = formatTime(mins);
   secondsE.innerHTML = formatTime(sec);
}

 function formatTime(time) {
   return time <10 ? '0${time}' : time;

 }
 Countdown();
 setInterval(Countdown,1000);
