var colorMode='custom';
var particleMode='random';
function updateText() {
var color=document.getElementById('fontColor').value;
var text=document.getElementById('text').value;

var loR=document.getElementById('loR').value;
var hiR=document.getElementById('hiR').value;
var noR=document.getElementById('noR').value;
var fSize=document.getElementById('fSize').value;


var r,g,b;
        vehicles=[];
        points=font.textToPoints(text,20,210,fSize);
        for(var i=0; i<points.length; i++) {
        pt=points[i];
        var vehicle;
        if(particleMode=='random') {
          var rnd=random(parseInt(loR),parseInt(hiR));
        vehicle=new Vehicle(pt.x,pt.y,rnd);
        }else if(particleMode=='custom') {
        vehicle=new Vehicle(pt.x,pt.y,noR);
        }
        if(colorMode=='random') {
        vehicle.colour(random(255),random(255),random(255));
          }else{
        vehicle.colour(hexToRgb(color).r,hexToRgb(color).g,hexToRgb(color).b);
         }
        vehicles.push(vehicle);
       }
lnth=vehicles.length;
resetD();
}

function changeBg(hex) {
  bgcolor[0]=hexToRgb(hex).r;
  bgcolor[1]=hexToRgb(hex).g;
  bgcolor[2]=hexToRgb(hex).b;
}

function showDivs(mode) {
   if(mode=="random") {
      document.getElementById('colorOpt').style.visibility='hidden';
      document.getElementById('colorOpt').style.position='absolute';
      colorMode='random';
   }else if(mode=="custom") {
      document.getElementById('colorOpt').style.visibility='visible';
      document.getElementById('colorOpt').style.position='';
      colorMode='custom';
   }
}

function showDivs2(mode) {
  if(mode=="random") {
     document.getElementById('sizeOptC').style.visibility='hidden';
     document.getElementById('sizeOptC').style.position='absolute';
     document.getElementById('sizeOptR').style.visibility='visible';
     document.getElementById('sizeOptR').style.position='';
     particleMode='random';
  }else if(mode=="custom") {
    document.getElementById('sizeOptR').style.visibility='hidden';
    document.getElementById('sizeOptR').style.position='absolute';
    document.getElementById('sizeOptC').style.visibility='visible';
    document.getElementById('sizeOptC').style.position='';
     particleMode='custom';
  }
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
