var loop1=0,loop2=0,loop3=0;
var flg=0,flg2=0;
var lnth;
var r,g,b;

var speedND=4;
var speedRD=4;

var intervalA,intervalB,intervalC;
r1=255;
g1=0;
b1=0;
r2=0;
g2=0;
b2=0;
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function dance1() {
   if(loop1<lnth) {
      vehicles[loop1].colour(r1,g1,b1);
      loop1++;
   }else{
     loop1=0;
     r1=rnd(0,255);
     g1=rnd(0,255);
     b1=rnd(0,255);
   }
   if(loop1==20) {
     if(flg==0) {
     intervalB=setInterval(dance2,speedND);
     flg=1;
   }
   }
}
function dance2() {
      if(loop2<lnth) {
        vehicles[loop2].colour(r2,g2,b2);
        loop2++;
      }else{
        loop2=0;
        r2=rnd(0,255);
        g2=rnd(0,255);
        b2=rnd(0,255);
      }
}

function dance() {
lnth=vehicles.length;
if(flg==0) {
intervalA=setInterval(dance1,speedND);
}
}

function rndomDance() {
  lnth=vehicles.length;
  if(flg2==0) {
  intervalC=setInterval(rndDnce,speedRD);
  flg2=1;
  }
}

function rndDnce() {
 if(loop3<lnth) {
   vehicles[loop3].colour(rnd(0,255),rnd(0,255),rnd(0,255));
   loop3++
 }else{
   loop3=0;
 }
}

function resetD() {
clearInterval(intervalA);
clearInterval(intervalB);
clearInterval(intervalC);
loop1=0;
loop2=0;
loop3=0;
flg=0;
flg2=0;
}
