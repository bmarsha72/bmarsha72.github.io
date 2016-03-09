$(document).ready(function(){
  // things to do when the page has fully loaded

//--> This function should take one argument
//---> Replace the audio sources with the correct ones from the array
function createPlayer(clipPath) {

var audio1 = document.createElement('audio');
audio1.src = 'audio/snippet1lib1/Snippet1Lib1.mp3';
audio1.addEventListener('ended', function() {

  var audio = document.createElement('audio');
  audio.src = clipPath[0];
  audio.addEventListener('ended', function() {

    var secondLibAudio = document.createElement('audio');
    secondLibAudio.src = 'audio/snippet2lib1/Snippet2Lib1.mp3';
    secondLibAudio.addEventListener('ended',function() {

      // when the song stops
    console.log('test');
    var secondAudio = document.createElement('audio');
    secondAudio.src = clipPath[1];
    secondAudio.addEventListener('ended', function() {
      // when the song stops
      console.log('test2');
      var thirdAudio = document.createElement('audio');
      thirdAudio.src = clipPath[2];
      thirdAudio.play();

    });
    secondAudio.play();

    });
    secondLibAudio.play();

    });
    audio.play();

    });

    audio1.play();
}

function checkLength(arr) {
  return (arr.length === 3) ? createPlayer(arr) : false;
}
// createPlayer();



  var clipsSelected = [];
  // Noun
  $('#noun1').change(function() {
    console.log('the noun1 function is happening');
    clipsSelected.push($(this, ':selected').val());


  });

  //Second Noun Listener:
  $('#noun2').change(function() {
    console.log('the noun2 function is happening');
    clipsSelected.push($(this, ':selected').val());


  });

  // Adjective listener
  $('#phrase1').change(function() {
    console.log('the phrase1 function is happening');
    clipsSelected.push($(this, ':selected').val());


  });

  $('#startshow').click(function() {
    checkLength(clipsSelected);
  });




}); // end of doc readdy
