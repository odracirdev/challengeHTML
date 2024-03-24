function changeVideo(videoId) {
  var iframe = document.getElementById('video');
  iframe.src = "https://www.youtube.com/embed/" + videoId;
}