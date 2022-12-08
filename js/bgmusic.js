window.addEventListener('load', function() {
    var bgmusic = document.querySelector('#bgmusic').querySelector('img');
      var song = document.querySelector('#song');
      bgmusic.addEventListener('click', function() {
        if(song.paused){
          song.play();
          bgmusic.setAttribute('class', 'songRotate');
          bgmusic.style.animationPlayState = 'running';
        }else{
          song.pause();
          bgmusic.style.animationPlayState = 'paused';
        }
      })
})