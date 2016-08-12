var s = new Snap("#logo");


Snap.load("assets/logo.svg", function(file) {
  s.append(file);
});

logoparts = s.node;

console.log(logoparts);

s.click(function(){
  console.log("pat clicked");
});
