var s = new Snap("#logo");


Snap.load("assets/logo.svg", function(file) {
  s.append(file);
});


s.click(function(){
  console.log("clicked");
});
