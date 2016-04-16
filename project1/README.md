
<h1>Hell Toupée

  <i>Stakeholder - Brian Marshall

<h2>Welcome to Hell Toupée, the Trump Lib
game.

The object is to select speech components from the pull-down
lists provided, then press the button to hear the mad-lib of
Donald Trump speaking the mad lib.

Technologies used:

+ HTML
+ jQuery
+ Javascript
+ ClipGrab
+ WavePad (licensed version)

The biggest difficulty encountered was finding
a way to play the selected MP3's in the correct
order, independent of order selected,
and triggering the final audio event to play
uninterrupted, which was accomplished with a callback API
function being
fed both the fixed sentences and the user-selected components held in
a Javascript object:

```
function createPlayer(clipPath) {

var audio1 = document.createElement('audio');
audio1.src = 'audio/snippet1lib1/Snippet1Lib1.mp3';
audio1.addEventListener('ended', function() {

  var audio = document.createElement('audio');
  audio.src = clipPath.noun1;
  audio.addEventListener('ended', function() {
```

Original wireframe sketch:

![wireframe](/style/images/toupee.pdf)

No animals were harmed in the construction of this API.
