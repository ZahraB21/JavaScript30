// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player_slider");
const skipButtons = player.querySelectorAll("[data-skip]");

// Build the functions
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function updateVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
  video[this.name] = this.value;
}

//  Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", updateVideo));

ranges.forEach((range) => range.addEventListener("change", updateRange));
ranges.forEach((range) => range.addEventListener("mousemove", updateRange));
