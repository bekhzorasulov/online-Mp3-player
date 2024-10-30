let currentMusic = 0;

const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  musicDuration.textContent = formatTime(music.duration);
  playBtn.classList.toggle("pause");

  seekBar.max = music.duration;
});

// setup music

const setMusic = (music) => {
  seekBar.value = 0;
  currentMusic = music;
};

// format time
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
};
// set interval
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.textContent = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});

// `${
//     (music.duration / 60).toFixed(0) > 0
//       ? "0" + (music.duration / 60).toFixed(0)
//       : "00"
//   }:${(music.duration % 60).toFixed(0)}`;
//   console.log(music.duration);
