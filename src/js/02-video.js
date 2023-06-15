import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

// const time = 'videoplayer-current-time';

// console.log(time);


function onPlay(evt) {
  console.log(evt);
};
player.on('play', onPlay);


// const player = new Vimeo.Player(playerElement);
// console.log(player);



//   let time = localStorage.getItem('videoProgress');
// if(time != null) {
//     player.setCurrentTime(time);
// }

// player.on('pause', function() {
//     player.getCurrentTime().then(function(seconds) {
//         localStorage.setItem('videoProgress', seconds);
//     });
// });
