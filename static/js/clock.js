function showTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = (hh < 12) ? "AM" : "PM";

  if(hh === 0){
      hh = 12;
  } else if (hh > 12){
      hh = hh - 12;
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
    
  let time = hh + ":" + mm + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ showTime() }, 1000);
}

showTime();