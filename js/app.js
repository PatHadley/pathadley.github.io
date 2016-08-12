var s = Snap("#svg");


var logo = Snap.load("assets/logo.svg", function(loadedFragment) {
  s.append(loadedFragment);
});


s.click(function(){
  console.log("clicked");
});
