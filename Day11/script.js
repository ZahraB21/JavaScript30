// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player_slider");
const skipButtons = player.querySelectorAll("[data-slip]");

// Build the functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
//  Hook up the event listeners
toggle.addEventListener("click", togglePlay);
