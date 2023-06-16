import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(evt) {
  console.log(evt.seconds);

  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
