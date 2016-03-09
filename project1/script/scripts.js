$(document).ready(function(){
  // things to do when the page has fully loaded

function createPlayer() {
  var audio = document.createElement('audio');
  audio.src = 'audio/adjectives/Slob.mp3'
  audio.addEventListener('ended', function() {
    // when the song stops
    console.log('test');
    var secondAudio = document.createElement('audio');
    secondAudio.src = 'audio/people/Rosie.mp3';
    secondAudio.addEventListener('ended', function() {
      // when the song stops
      console.log('test2');
      var thirdAudio = document.createElement('audio');
      thirdAudio.src = 'audio/secondnouns/IslamicTerrorism.mp3';
      thirdAudio.play();

      // create new audio + add src
      // + play();
    });
    secondAudio.play();
    // create new audio + add src
    // + play();
  });
  audio.play();
}
createPlayer();



  var clipsSelected = [];
  // Noun
  $('.test1').change(function() {
    console.log('this function is happening');
    noun1Selected.push($(this, ':selected').val());
    console.log(noun1Selected, '<--- You should see an array here');


  });

  // Adjective listener
  $('.adjective').change(function() {
    //
  })
}); // end of doc readdy
