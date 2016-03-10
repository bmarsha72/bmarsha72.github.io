  var clipsSelected = {};
$(document).ready(function(){
  // things to do when the page has fully loaded

//--> This function should take one argument
//---> Replace the audio sources with the correct ones from the array


// function checkLength(obj) {
//   // create a counter variable here
//   var counter = 0
//   for (var prop in obj) {
    // add 1 to counter each time around


  // if (counter === 3){
  //   return createPlayer();
  // }

// }
//createPlayer();





  // Noun
  $('#noun1').change(function() {
    console.log('the noun1 function is happening');
    // clipsSelected.push($(this, ':selected').val());
    clipsSelected.noun1 = $(this, ':selected').val();

  });

  //Second Noun Listener:
  $('#noun2').change(function() {
    console.log('the noun2 function is happening');
    clipsSelected.noun2 = $(this, ':selected').val()
  });

  // Adjective listener
  $('#phrase1').change(function() {
    console.log('the phrase1 function is happening');
    clipsSelected.phrase1 = $(this, ':selected').val()
  });

  $('#startshow').click(function() {
    checkLength(clipsSelected);
  });




}); // end of doc readdy

function checkLength(obj){
  var counter = 0
  for (var prop in obj){
    counter++
    if(counter === 3){
      console.log(counter)
      createPlayer(clipsSelected)
    }
    console.log("obj: " + prop + " = " + obj[prop])
  }
}

function createPlayer(clipPath) {

var audio1 = document.createElement('audio');
audio1.src = 'audio/snippet1lib1/Snippet1Lib1.mp3';
audio1.addEventListener('ended', function() {

  var audio = document.createElement('audio');
  audio.src = clipPath.noun1;
  audio.addEventListener('ended', function() {

    var secondLibAudio = document.createElement('audio');
    secondLibAudio.src = 'audio/snippet2lib1/Snippet2Lib1.mp3';
    secondLibAudio.addEventListener('ended',function() {

      var secondAudio = document.createElement('audio');
      secondAudio.src = clipPath.noun2;
      secondAudio.addEventListener('ended', function() {

        var thirdLibAudio = document.createElement('audio');
        thirdLibAudio.src = 'audio/snippet3lib1/snippet3lib1.mp3';
        thirdLibAudio.addEventListener('ended',function() {

          var thirdAudio = document.createElement('audio');
          thirdAudio.src = clipPath.phrase1;
          thirdAudio.play();


    });
    thirdLibAudio.play();


    });
    secondAudio.play();

    });
    secondLibAudio.play();

    });
    audio.play();

    });
    audio1.play();
}
