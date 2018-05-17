/* My JavaScript function that only has love for board games */
function mySearch() {
  var mySearchText = document.getElementById("mySearchField").value;
  if (mySearchText == "board games" || mySearchText == "Board games" || mySearchText == "boardgames" || mySearchText == "Boardgames") {
    document.getElementById('myHeader').innerHTML = "You searched for \"" + mySearchText + "\"... try these ones!";
    document.getElementById("myResultBox").style.visibility = "visible";
  }
  else {
    document.getElementById("myResultBox").style.visibility = "hidden";
    document.getElementById('myHeader').innerHTML = "You can search for \"" + mySearchText + "\" any other day.</br></br> Try something fun for once like... board games!" ;
  }
}
