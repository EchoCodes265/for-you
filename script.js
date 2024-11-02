const playButton = document.getElementById('playButton');
const song = document.getElementById('song');

playButton.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    playButton.textContent = 'Pause';
  } else {
    song.pause();
    playButton.textContent = 'Play';
  }
});
