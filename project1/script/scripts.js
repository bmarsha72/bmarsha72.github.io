$(document).ready(function(){
  // things to do when the page has fully loaded

  var mp3 = ['audio/golf.mp3','audio/china.mp3','audio/IslamicTerrorism.mp3','audio/the_middle_east.mp3']

  //var select = document.getElementById("selectNumber");

  //var options = ["golf", "China", "Islamic Terrorism", "The Middle East"];

  //for(var i = 0; i < options.length; i++) {
  //    var opt = options[i];
  //    var el = document.createElement("option");
  //    el.textContent = opt;
  //    el.value =
  //    select.appendChild(el);
  //}

//  $('#nounSelector').append('<option value="'+mp3[0]+'" >Golf</option>')
//  $('#nounSelector').append('<option value="'+mp3[1]+'" >China</option>')
//  $('#nounSelector').append('<option value="'+mp3[2]+'" >Islamic Terrorism</option>')
//  $('#nounSelector').append('<option value="'+mp3[3]+'" >The Middle East</option>')


function createPlayer(url, next) {
  var audio = document.createElement('audio');
  audio.src = 'audio/IslamicTerrorism.mp3'
  audio.addEventListener('ended', function() {
    // when the song stops
    console.log('test');
    var secondAudio = document.createElement('audio');
    secondAudio.src = 'audio/golf.mp3';
    secondAudio.addEventListener('ended', function() {
      // when the song stops
      console.log('test2');
      var thirdAudio = document.createElement('audio');
      thirdAudio.src = 'audio/the_middle_east.mp3';
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




 $('.test1').change(function() {
   console.log('this function is happening')
      $('#noun1').prop("src", jimRules())
    });
}); // end of doc readdy

function jimRules(){
  var optionValue = $('option:selected').val();
  return optionValue
}
