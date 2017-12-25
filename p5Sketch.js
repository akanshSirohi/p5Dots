var font,points,pt;
var vehicles=[];
var bgcolor=[];
bgcolor[0]=255;
bgcolor[1]=255;
bgcolor[2]=255;

function preload() {
   font = loadFont('fonts/font1.ttf');
}
function setup() {
  var canvas=createCanvas(parseInt(window.innerWidth)-20,350);
  canvas.parent('sketch-holder');
 //points=font.textToPoints('jktdyh',100,210,192);
points=font.textToPoints("Akansh",20,210,192);
for(var i=0; i<points.length; i++) {
  pt=points[i];
  var vehicle=new Vehicle(pt.x,pt.y,random(5,8));
  vehicle.colour(0,0,0);
  vehicles.push(vehicle);
  }
}
function draw() {
   background(bgcolor[0],bgcolor[1],bgcolor[2]);
   for(var i=0; i<vehicles.length; i++) {
        var v=vehicles[i];
        v.behavior();
        v.update();
        v.show();
   }
}
