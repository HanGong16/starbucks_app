var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'E8PhxEvSRBY',
    playerVars: {
      autoPlay: true,
      loop: true,
      playlist: 'E8PhxEvSRBY',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
