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

function getTime(seconds) {
    let total = Math.round(seconds) / 60;
    let [minutes, second] = String(total).split(".");
    second = Math.round((second * 60) / 100).toString().substring(0, 2);
    let houre = 0;
    if (minutes > 60) {
        total = minutes / 60
         let [h1, m1] = String(total).split(".");
         houre = h1,
         minutes = Math.round((m1 * 60) / 100).toString().substring(0, 2);
    }
    return (houre + ":" + minutes + ":" +second)
}