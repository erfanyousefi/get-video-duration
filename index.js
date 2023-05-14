window.URL = window.URL || window.webkitURL;

function getDuration(control) {
    var video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);

        console.log("Duration : " + video.duration + " seconds");
        console.log(getTime(video.duration));
    }
    video.src = URL.createObjectURL(control.files[0]);
}

function getTime(time) {
  let total = Math.round(time) / 60;
  let [min, percentage] = String(total).split(".");
  if(percentage == undefined) percentage = "0"
  let sec = Math.round(((percentage.substring(0,2)) * 60) / 100);
  let hour = 0;
  if (min > 59) {
    total = min / 60;
    [hour , percentage] = String(total).split(".")
    if(percentage == undefined) percentage = "0"
    min = Math.round(((percentage.substring(0,2)) * 60) / 100);
  }
  if(hour < 10 ) hour = `0${hour}` ;
  if(min < 10) min = `0${min}`
  if(sec < 10) sec = `0${sec}`
  return hour + ":" + min + ":" + sec;
}
