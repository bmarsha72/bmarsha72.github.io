$(document).ready(function(){
  // things to do when the page has fully loaded



  var mp3 = ['audio/golf.mp3','audio/china.mp3','audio/IslamicTerrorism.mp3','audio/the_middle_east.mp3']

  var select = document.getElementById("selectNumber");

  var options = ["golf", "China", "Islamic Terrorism", "The Middle East"];

  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }

  $('#selectNumber').append('<option value="'+mp3[1]+'" >China</option>')
});
