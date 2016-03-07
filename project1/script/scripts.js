$(document).ready(function(){
  // things to do when the page has fully loaded

  // globals
  var player    = document.getElementById ("player"),
  var playlist  = document.getElementById ("playlist"),
  var stop      = document.getElementById ("stop");

  // functions
  function playlistItemClick(clickedElement) {
      var selected = playlist.querySelector(".selected");

      if (selected) {
          selected.classList.remove("selected");
      }

      clickedElement.classList.add("selected");
      player.src = clickedElement.getAttribute("/Users''''/sarahmarshall1/Desktop/Rosie.mp3");
      player.play();
  }

  function playNext() {
      var selected = playlist.querySelector("li.selected");
      if (selected && selected.nextSibling) {
          playlistItemClick(selected.nextSibling);
      }
  }

  // event listeners
  stop.addEventListener("click", function () {
      player.pause();
  });
  player.addEventListener("ended", playNext);
  playlist.addEventListener("click", function (e) {
      if (e.target && e.target.nodeName === "LI") {
          playlistItemClick(e.target);
      }
  });​





});
