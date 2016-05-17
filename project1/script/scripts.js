  var clipsSelected = {};
$(document).ready(function(){
  // things to do when the page has fully loaded

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

  var trumpImages = ['http://www.slate.com/content/dam/slate/blogs/moneybox/2015/08/16/donald_trump_on_immigration_build_border_fence_make_mexico_pay_for_it/483208412-real-estate-tycoon-donald-trump-flashes-the-thumbs-up.jpg.CROP.promo-xlarge2.jpg','https://upload.wikimedia.org/wikipedia/commons/e/ee/Donald_Trump_by_Gage_Skidmore.jpg','http://static.digg.com/images/477b049c31844063bc14ba6878964bdd_97e130b6dc4f4eb0901182aa58d59ea0_1_post.jpeg','http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2015/01/02/Donald-Trump_612x380.jpg?itok=eSYTrOud'];
  $('#startshow').click(function() {
    $('#trump-img').attr('src', trumpImages[Math.floor(Math.random() * trumpImages.length - 1)]);
    console.log(trumpImages[Math.floor(Math.random() * trumpImages.length - 1)], '<---- trump image');
    checkLength(clipsSelected);
  });




}); // end of doc readdy


//This is the function that checks to make sure that
//there are the correct number of selections if done out of order.
function checkLength(obj){
  var counter = 0
  for (var prop in obj){
    counter++
    if(counter === 3){
      console.log(counter)
      createPlayer(clipsSelected)
    }
    else{
      console.log("please make all selections")
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
    secondLibAudio.src = 'audio/audiocopies/IwentToTheWhartonSchoolOfFinance.mp3';
    secondLibAudio.addEventListener('ended',function() {

      var secondAudio = document.createElement('audio');
      secondAudio.src = clipPath.noun2;
      secondAudio.addEventListener('ended', function() {

        var thirdLibAudio = document.createElement('audio');
        thirdLibAudio.src = 'audio/audiocopies/hitmymotheroverthehead.mp3';
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
