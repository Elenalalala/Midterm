let time;
let scene = 1;
let familyimg, friendimg, societyimg, selfimg;
let noimg, danceimg, nookimg, singimg, okimg, fightimg, flyimg, notalkimg, hideimg, talkimg, showimg, nobookimg, bookimg, nohelpimg, helpimg, meimg, yourselfimg, himimg, cryimg,galleryimg,balletimg,musicimg,apimg,artimg;
let fa, fr, so, se;
let dot=[];


function preload() {
  familyimg = loadImage('family_icon.png');
  friendimg = loadImage('friend.png');
  societyimg = loadImage('society.png');
  selfimg = loadImage('self.png');
  noimg = loadImage('no.png');
  danceimg = loadImage('dance.png');
  nookimg = loadImage('nook.png');
  singimg = loadImage('sing.png');
  okimg = loadImage('ok.png');
  fightimg = loadImage('fight.png');
  flyimg = loadImage('fly.png');
  notalkimg = loadImage('notalk.png');
  hideimg = loadImage('hide.png');
  talkimg = loadImage('talk.png');
  showimg = loadImage('show.png');
  nobookimg = loadImage('nobook.png');
  bookimg = loadImage('book.png');
  nohelpimg = loadImage('Nohelp.png');
  helpimg = loadImage('help.png');
  meimg = loadImage('Me.png');
  yourselfimg = loadImage('Yourself.png');
  himimg = loadImage('Him.png');
  cryimg = loadImage('cry.png');
  galleryimg=loadImage('gallery.png');
  balletimg=loadImage('ballet.png');
  musicimg=loadImage('music1.png');
  apimg=loadImage('ap-1.png');
  artimg=loadImage('art.png');
}

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  fa = 50;
  fr = 50;
  so = 50;
  se = 50;
  for(i=0;i<20;i++){
    dot[i]=new Dots();
}
}

function draw() {
  if(time<8000){
  background(0,7);
  }
  if(time>8000){
  background(0);
  }

  if (scene == 1) {
    scene1();
  }
  if (scene == 2) {
    scene2();
  }
  if (scene == 3) {
    scene3();
  }
  if (scene == 4) {
    scene4();
  }
  if (scene == 5) {
    scene5();
  }
  if (scene == 6) {
    scene6();
  }
  if (scene == 7) {
    scene7();
  }
  if (scene == 8) {
    scene8();
  }
  if (scene == 9) {
    scene9();
  }
  if (scene == 10) {
    scene10();
  }
  if (scene == 11) {
    scene11();
  }
  if (scene == 12) {
    scene12();
  }
  if (scene == 13) {
    scene13();
  }
  if (scene == 14) {
    scene14();
  }
  if (scene == 15) {
    scene15();
  }
  // if (scene == 15 && fa<10) {
  //   scene15();
  //   if(fa<10&& mouseIsPressed){
  //   end1();
  //   mouseIsPressed =false;
  //   }
  // }
  if (scene == 16) {
    scene16();
  }
  if (scene == 17) {
    scene17();
  }
  if (scene == 18) {
    scene18();
  }
  if (scene == 19) {
    scene19();
  }
  if (scene == 20) {
    scene20();
  }
  if (scene == 21) {
    scene21();
  }
  if (scene == 22) {
    scene22();
  }
  if (scene == 23) {
    scene23();
  }
  if (scene == 24) {
    scene24();
  }
  if (scene == 25) {
    scene25();
  }
  if (scene == 26) {
    scene26();
  }
  if (scene == 27) {
    scene27();
  }
  if (scene == 28) {
    scene28();
  }
  if (scene == 29) {
    scene29();
  }
  if (scene == 30) {
    scene30();
  }
  if (scene == 31) {
    scene31();
  }
  if (scene == 32) {
    scene32();
  }
  if (scene == 33) {
    scene33();
  }
  if (scene == 34) {
    scene34();
  }
  if (scene == 35) {
    scene35();
  }
  if (scene == 36) {
    scene36();
  }
  if (scene == 37) {
    scene37();
  }
  if (scene == 38) {
    scene38();
  }
  if (scene == 39) {
    scene39();
  }
  if (scene == 40) {
    scene40();
  }
  if (scene == 41) {
    scene41();
  }
  if (scene == 101) {
    scene101();
  }
  


  print(scene, fa, se, so, fr);

  if (scene == 1 && mouseIsPressed) {
    scene += 1;
    mouseIsPressed = false;
  }
  if (scene == 2 && mouseIsPressed) {
    scene += 1;
    mouseIsPressed = false;
  }

  if (scene == 3 && mouseX < 300 && mouseIsPressed) {
    scene = 4;
    mouseIsPressed = false;
  }

  if (scene == 3 && mouseX > 300 && mouseIsPressed) {
    scene = 5;
    mouseIsPressed = false;
  }


  if (scene == 4 && mouseIsPressed) {
    scene = 6;
    mouseIsPressed = false;
  }
  if (scene == 5 && mouseIsPressed) {
    scene = 6;
    mouseIsPressed = false;
  }
  if (se < 25 && scene == 6) {
    if (mouseX < 300 && mouseIsPressed) {
      scene = 9;
      mouseIsPressed = false;
    }
    if (mouseX > 300 && mouseIsPressed) {
      scene = 10;
      mouseIsPressed = false;
    }
  }
  if (scene == 6 && mouseX < 300 && mouseIsPressed) {
    scene = 7;
    mouseIsPressed = false;
  }

  if (scene == 6 && mouseX > 300 && mouseIsPressed) {
    scene = 8;
    mouseIsPressed = false;
  }
  if (scene == 7 && mouseIsPressed) {
    scene = 11;
    mouseIsPressed = false;
  }
  if (scene == 8 && mouseIsPressed) {
    scene = 11;
    mouseIsPressed = false;
  }

  if (scene == 9 && mouseIsPressed) {
    scene = 12;
    mouseIsPressed = false;
  }
  if (scene == 10 && mouseIsPressed) {
    scene = 12;
    mouseIsPressed = false;
  }
  if (scene == 11 && mouseX < 300 && mouseIsPressed) {
    scene = 13;
    mouseIsPressed = false;
  }

  if (scene == 11 && mouseX > 300 && mouseIsPressed) {
    scene = 14;
    mouseIsPressed = false;
  }
  if (scene == 12 && mouseX < 300 && mouseIsPressed) {
    scene = 15;
    mouseIsPressed = false;
  }
  if (scene == 12 && mouseX > 300 && mouseIsPressed) {
    scene = 16;
    mouseIsPressed = false;
  }
    if(scene==15 && fa==0 && mouseIsPressed){
  scene=101;
    mouseIsPressed = false;
  }
  if (scene == 15 && mouseIsPressed ) {
    scene=17;
    mouseIsPressed = false;
  }

  if (scene == 13 && mouseIsPressed) {
    scene = 17;
    mouseIsPressed = false;
  }
  if (scene == 14 && mouseIsPressed) {
    scene = 17;
    mouseIsPressed = false;
  }
  if (scene == 16 && mouseIsPressed && fa==0) {
    scene = 101;
    mouseIsPressed = false;
  }
  if (scene == 16 && mouseIsPressed) {
    scene = 17;
    mouseIsPressed = false;
  }
  if (scene == 17 && mouseX < 300 && mouseIsPressed) {
    scene = 18;
    mouseIsPressed = false;
  }
  if (scene == 17 && mouseX > 300 && mouseIsPressed) {
    scene = 19;
    mouseIsPressed = false;
  }
  if (scene == 18 && mouseIsPressed && so ==0) {
    scene = 103;
    mouseIsPressed = false;
  }
  if (scene == 18 && mouseIsPressed) {
    scene = 20;
    mouseIsPressed = false;
  }
  if (scene == 19 && mouseIsPressed) {
    scene = 20;
    mouseIsPressed = false;
  }
  if (scene == 20 && mouseX < 300 && mouseIsPressed) {
    scene = 21;
    mouseIsPressed = false;
  }
  if (scene == 20 && mouseX > 300 && mouseIsPressed) {
    scene = 22;
    mouseIsPressed = false;
  }
  if (scene == 21 && mouseIsPressed) {
    scene = 23;
    mouseIsPressed = false;
  }
  // if (scene == 22 && mouseIsPressed) {
  //   scene = 2;
  //   mouseIsPressed = false;
  // }
  if (scene == 23 && mouseX < 300 && mouseIsPressed) {
    scene = 24;
    mouseIsPressed = false;
  }
  if (scene == 23 && mouseX > 300 && mouseIsPressed) {
    scene = 25;
    mouseIsPressed = false;
  }
  if (scene == 22 && mouseIsPressed) {
    scene = 26;
    mouseIsPressed = false;
  }
  if (scene == 25 && mouseIsPressed) {
    scene = 26;
    mouseIsPressed = false;
  }
  if (scene == 24 && mouseIsPressed) {
    scene = 26;
    mouseIsPressed = false;
  }
    if (scene == 26 && mouseX < 300 && mouseIsPressed) {
    scene = 27;
    mouseIsPressed = false;
  }
  if (scene == 26 && mouseX > 300 && mouseIsPressed) {
    scene = 36;
    mouseIsPressed = false;
  }
      if (scene == 27 && mouseX < 300 && mouseIsPressed) {
    scene = 28;
    mouseIsPressed = false;
  }
  if (scene == 27 && mouseX > 300 && mouseIsPressed) {
    scene = 29;
    mouseIsPressed = false;
  }
 if (scene == 28 && mouseIsPressed) {
    scene = 30;
    mouseIsPressed = false;
  }
  if (scene == 29 && mouseIsPressed) {
    scene = 30;
    mouseIsPressed = false;
  }
      if (scene == 30 && mouseX < 300 && mouseIsPressed) {
    scene = 31;
    mouseIsPressed = false;
  }
  if (scene == 30 && mouseX > 300 && mouseIsPressed) {
    scene = 32;
    mouseIsPressed = false;
  }
  if (scene == 31 && mouseIsPressed) {
    scene = 33;
    mouseIsPressed = false;
  }
  if (scene == 32 && mouseIsPressed) {
    scene = 33;
    mouseIsPressed = false;
  }
  if (scene == 33 && mouseX < 300 && mouseIsPressed) {
    scene = 34;
    mouseIsPressed = false;
  }
  if (scene == 33 && mouseX > 300 && mouseIsPressed) {
    scene = 35;
    mouseIsPressed = false;
  }
  if (scene == 36 && mouseX < 300 && mouseIsPressed) {
    scene = 37;
    mouseIsPressed = false;
  }
  if (scene == 36 && mouseX > 300 && mouseIsPressed) {
    scene = 38;
    mouseIsPressed = false;
  }
   if (scene == 37 && mouseIsPressed) {
    scene = 39;
    mouseIsPressed = false;
  }
   if (scene == 38 && mouseIsPressed) {
    scene = 39;
    mouseIsPressed = false;
  }
  if (scene == 39 && mouseX < 300 && mouseIsPressed) {
    scene = 40;
    mouseIsPressed = false;
  }
  if (scene == 39 && mouseX > 300 && mouseIsPressed) {
    scene = 41;
    mouseIsPressed = false;
  }
}
class Dots{
constructor(){
  this.x=random(width);
  this.y=0;
}
show(){
fill(255,0,0);
noStroke();
ellipse(this.x,this.y,4,8);
}
  move(){
  this.x=this.x+20*(cos(this.y));
  this.y+=3;
  }
}
function scene1() {
  time = millis();
  for(i=0;i<20;i++){
  dot[i].show();
  dot[i].move();
  }
  if (time < 1600) {
    textSize(40);
    fill(255);
    textFont('Rock Salt');
    text("YOU ARE DEAD", width / 2 - 180, height / 2);
    

  }
  if (time > 1600) {
    textSize(40);
    fill(255);
    textFont('Rock Salt');
    fill(255,0,0);
    text("YOU ARE DEAD", width / 2 - 180, height / 2);
    textFont('Covered By Your Grace');
    text("AT THE AGE OF 21.", width / 2 - 130, height / 2 + 60);
  }
}

function scene2() {
  textFont('Covered By Your Grace');
  fill(255,0,0);
  text("Whether you can be reborn or not,", 60, 150);
  text("Present your life carefully", 120, 190);
  fill(255,0,0);
  rect(305,255,280,60);
  fill(0);
  text("CLICK TO START", 180, 270);
    if(mouseX>165 && mouseX<445 && mouseY >230 && mouseY <290){
    fill(255,0,0);
    rect(305,255,300,70);
    noStroke();
    fill(0);
    text("CLICK TO START", 180, 270);
  }

}

function scene3() {
  fill(255);
  textFont('Indie Flower');
  text("1-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You want your mom.",200,60);
  if (mouseX < 300) {
    fill(255, 196, 147);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    fill(227, 190, 132);
    circle(200, 190, 140);
    image(cryimg, 100, 90);
    textSize(25);
    fill(250);
    text("Cry out loud", 130, 280);
  }
  if (mouseX > 300) {
    fill(186, 208, 255);
    square(400, 200, 220);
    fill(93, 164, 222);
    square(400, 200, 200);
    fill(173, 205, 224);
    circle(400, 190, 140);
    image(yourselfimg, 300, 90);
    textSize(25);
    fill(250);
    fill(255);
    text("Keep it yourself", 312, 280);
  }
}

function scene4() {
  fill(255, 0, 0);
  text("Your mom hugged you and you felt better", 80, 210);
  se = 70;
  so = 40;
  fa = 80;
}

function scene5() {
  fill(0, 0, 255);
  text("Your family didn't notice you", 150, 210);
  se = 20;
  fa = 30;
}

function scene6() {
  text("5-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You mom asked who broke the glass.",150,60);
  if (mouseX < 300) {
    fill(255, 170, 51);
    square(200, 200, 220);
    image(meimg, 100, 100);
    textSize(25);
    fill(250);
    text("Me.", 185, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 250);
    square(400, 200, 220);
    image(himimg, 300, 100);
    textSize(25);
    fill(250);
    text("Not me.", 360, 290);
  }
}

function scene7() {
  fill(255, 0, 0);
  text("It's ok. Be careful next time.", 150, 210);
  if (fa == 80) {
    fa = 90;
  }
  if (fa == 30) {
    fa = 40;
  }
}

function scene8() {
  fill(0, 0, 255);
  text("Your little brother cried.", 180, 210);
  if (se == 70) {
    se = 75;
  }
  if (se == 20) {
    se = 25;
  }
  if (fa == 80) {
    fa = 70;
  }
  if (fa == 30) {
    fa = 20;
  }

}

function scene9() {
  fill(255, 0, 0);
  text("Your mother scolded you.", 170, 210);
  fa = 35;
  se = 10;
}

function scene10() {
  fill(255, 0, 0);
  text("Your mother did not believe you", 130, 210);
  text("and scolded you anyway.", 160, 235);
  fa = 5;
  se = 10;
}

function scene11() {
  text("10-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Your brother needed money.",180,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(nohelpimg, 100, 100);
    textSize(25);
    fill(250);
    text("Sorry bro.", 145, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 250);
    square(400, 200, 220);
    fill(122, 163, 255);
    square(400, 200, 200);
    image(helpimg, 300, 100);
    textSize(25);
    fill(250);
    text("How much?", 340, 290);
  }

}

function scene12() {
  text("10-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You are bullied.",200,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(flyimg, 100, 100);
    textSize(25);
    fill(250);
    text("Cry out for help", 115, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    image(fightimg, 300, 100);
    textSize(25);
    fill(250);
    text("Fight back!", 350, 290);
  }
}

function scene13() {
  fill(255, 0, 0);
  text("You found out your brother was bullied.", 90, 210 - 20);
  text("You fought with the bullies and", 140, 240 - 20);
  text("standed up for your brother.", 150, 270 - 20);
  fa = 100;
  se = 60;
  fr = 30;

}

function scene14() {
  fill(0, 0, 255);
  text("You gave him $200.", 200, 180);
  text("Your found your brother depressed,", 120, 210);
  text("but you don't know why.", 170, 240);
  so = 20;
  fa = 55;
}

function scene15() {
  fill(255, 0, 0);
  
  if (fa > 10) {
    text("You cried out to your parents for help,", 110, 210 - 40);
    text("Your parents talked to school about it.", 110, 200);
    text("The bullies got punished and you transfered", 70, 230);
    fa = 60;
    se = 20;
    fr = 15;
    so = 40;
  }
  if(fa<10){ 

    text("You cried out to your parents for help,", 110, 210 - 40);
    text("Your parents blamed it to you.", 150, 240 - 40);
    text("'' YOU DESERVE IT", 210, 270 - 40);
    text("Why do they bully you not others? ''", 130, 300 - 40);
    fa = 0;
    se = 3;
    so = 10;
}
}

function scene16() {
  fill(0, 0, 255);
  text("You fought back,", 210, 180);
  text("but you didn't win.", 200, 210);
  text("You came home with bruises and blood.", 120, 240);
  if (fa < 10) {
    text("Your parents didn't notice your bruises and blood.", 50, 270);
    se = 20;
    fr = 10;
    so = 20;
    fa = 0;
  }
  if (fa > 10) {
    text("Your parent asked you what happened,", 100, 270);
    text("and take care of you.", 180, 300);
    se = 25;
    fr = 10;
    so = 20;
    fa = 45;
  }
}

function scene17() {
  text("12-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Your classmate asked for your homework.",150,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(bookimg, 100, 100);
    textSize(25);
    fill(250);
    text("OK...", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    image(nobookimg, 300, 100);
    textSize(25);
    fill(250);
    text("Do it yourself", 330, 290);
  }
}

function scene18() {
  fill(255, 0, 0);
  text("You are called to the office for plagiarism.", 90, 200);
  if (fa == 100 && se == 60 && fr == 30 && so == 50) {
    so = 20;
    fr = 40;
    se = 50;
    fa = 100;
  }
  if (fa == 55 && se == 70 && fr == 50 && so == 20) {
    fa = 55;
    se = 60;
    fr = 60;
    so = 0;
  }
  if (fa == 60 && se == 20 && fr == 10 && so == 40) {
    fa = 60;
    se = 10;
    fr = 20;
    so = 10;
  }
  if (fa == 45 && se == 25 && fr == 10 && so == 20) {
    fa = 45;
    se = 15;
    fr = 20;
    so = 0;
  }

}

function scene19() {
  fill(0, 0, 255);
  text("Your classmate left you angrily.", 140, 200);
  if (fa == 100 && se == 60 && fr == 30 && so == 50) {
    fa = 100;
    se = 70;
    fr = 20;
    so = 50;
  }
  if (fa == 55 && se == 70 && fr == 50 && so == 20) {
    fa = 55;
    se = 80;
    fr = 40;
    so = 20;
  }
  if (fa == 60 && se == 20 && fr == 10 && so == 40) {
    fa = 60;
    se = 30;
    fr = 0;
    so = 40;
  }
  if (fa == 45 && se == 25 && fr == 10 && so == 20) {
    fa = 45;
    se = 35;
    fr = 0;
    so = 20;
  }
}

function scene20() {
  text("15-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You have a crush on someone",150,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(showimg, 100, 100);
    textSize(25);
    fill(250);
    text("Can I have ur ins?", 110, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    image(hideimg, 300, 100);
    textSize(25);
    fill(250);
    text("Forget it...", 350, 290);
  }
}

function scene21() {
  fill(255, 0, 0);
  text("He said no.", 220, 200);
  if (fa == 100 && se == 50 && fr == 40 && so == 20) {
    se = 45;
  }
  if (fa == 100 && se == 70 && fr == 20 && so == 50) {
    se = 65;
  }
  if (fa == 55 && se == 80 && fr == 40 && so == 20) {
    se = 75;
  }
  if (fa == 60 && se == 10 && fr == 20 && so == 10) {
    se = 5;
  }

}

function scene22() {
  fill(0, 0, 255);
  text("Nothing happened.", 220, 200);
  if (fa == 100 && se == 50 && fr == 40 && so == 20) {
    se = 45;
  }
  if (fa == 100 && se == 70 && fr == 20 && so == 50) {
    se = 65;
  }
  if (fa == 55 && se == 80 && fr == 40 && so == 20) {
    se = 75;
  }
  if (fa == 60 && se == 10 && fr == 20 && so == 10) {
    se = 5;
  }
}

function scene23() {
  text("15-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You have a crash on someone.",150,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Try Again", 155, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Give Up", 360, 290);
  }
}

function scene24() {
  fill(255, 0, 0);
  text("He said,''Ok.''", 220, 200);
  if (fa == 100 && se == 45 && fr == 40 && so == 20) {
    se = 65;
    fr = 60;
    so = 30;
  }
  if (fa == 100 && se == 65 && fr == 20 && so == 50) {
    se = 85;
    fr = 40;
    so = 60;
  }
  if (fa == 55 && se == 75 && fr == 40 && so == 20) {
    se = 95;
    fr = 60;
    so = 30;
  }
  if (fa == 60 && se == 5 && fr == 20 && so == 10) {
    se = 25;
    fr = 40;
    so = 20;
  }
}

function scene25() {
  fill(0, 0, 255);
  text("Nothing happened.", 220, 200);
}

function scene26() {
  text("17-Year Old", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Your next school year's focus.",120,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    image(artimg, 100, 100);
    textSize(25);
    fill(250);
    text("Fine Art", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    image(apimg, 300, 100);
    textSize(25);
    fill(250);
    text("Study Program", 330, 290);
  }
}
function scene27() {
  text("Gala Event", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Dancing performance.",200,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    // image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Sign up!", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    // image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Nah.", 330, 290);
  }
}
function scene28() {
  fill(0, 0, 255);
  text("Performance went well", 210, 200);
  if(fa==100 && se==65&& fr==60&&so==30){
    fa=100;
    se=75;
    fr=70;
    so=20;
  }
    if(fa==100 && se==85&& fr==40&&so==60){
    fa=100;
    se=95;
    fr=50;
    so=70;
  }
    if(fa==55 && se==95&& fr==60&&so==30){
    fa=65;
    se=100;
    fr=70;
    so=40;
  }
    if(fa==60 && se==25&& fr==40&&so==20){
    fa=70;
    se=35;
    fr=50;
    so=30;
  }
    
}
function scene29() {
  fill(0, 0, 255);
  text("You saw other people's performance went well.", 150, 200);
  if(fa==100 && se==65&& fr==60&&so==30){
    fa=100;
    se=55;
    fr=70;
    so=10;
  }
    if(fa==100 && se==85&& fr==40&&so==60){
    fa=100;
    se=75;
    fr=40;
    so=60;
  }
    if(fa==55 && se==95&& fr==60&&so==30){
    fa=55;
    se=85;
    fr=60;
    so=30;
  }
    if(fa==60 && se==25&& fr==40&&so==20){
    fa=60;
    se=15;
    fr=40;
    so=20;
  }
}
function scene30() {
  text("Gala Event", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Fine Art Exhibition",190,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    // image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Sign up!", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    // image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Nah.", 330, 290);
  }
}
function scene31() {
  fill(0, 0, 255);
  text("Exhibition went well", 220, 200);
  if(fa==100&&se==75&& fr==70&& so==20){
  fa=100;
    se=85;
    fr=80;
    so=30;
  }
  if(fa==100&& se==95&&fr==50&&so==70){
    fa=100;
    se=100;
    fr=60;
    so=80;
     }
  if(fa==65&&se==100&&fr==70&&so==40){
     fa=75;
    se=100;
    fr=80;
    so=50;
     }
  if(fa==70&& se==35&& fr==50&&so==30){
    fa=80;
    se=45;
    fr=60;
    so=40;
  }
  
}
function scene32() {
  fill(0, 0, 255);
  text("You wished you were there.", 220, 200);
    if(fa==100&&se==75&& fr==70&& so==20){
  fa=100;
    se=65;
    fr=70;
    so=20;
  }
  if(fa==100&& se==95&&fr==50&&so==70){
    fa=100;
    se=85;
    fr=50;
    so=70;
     }
  if(fa==65&&se==100&&fr==70&&so==40){
     fa=65;
    se=90;
    fr=70;
    so=40;
     }
  if(fa==70&& se==35&& fr==50&&so==30){
    fa=70;
    se=25;
    fr=50;
    so=30;
  }
}
function scene33() {
  text("Gala Event", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("Singing.",150,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    // image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Sign up!", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    // image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Nah.", 330, 290);
  }
}
function scene34() {
  fill(0, 0, 255);
  text("It went ok.", 220, 200);
  if(fa==100&&se==75&& fr==70&& so==20){
  fa=100;
    se=75;
    fr=70;
    so=20;
  }
  if(fa==100&& se==95&&fr==50&&so==70){
    fa=100;
    se=95;
    fr=50;
    so=70;
     }
  if(fa==65&&se==100&&fr==70&&so==40){
     fa=65;
    se=100;
    fr=70;
    so=40;
     }
  if(fa==70&& se==35&& fr==50&&so==30){
    fa=70;
    se=35;
    fr=50;
    so=30;
  }
}
function scene35() {
  fill(0, 0, 255);
  text("You get used to being ordinary.", 180, 200);
  se=0;
  
}
function scene36() {
  text("AP Program", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    // image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Sign up!", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    // image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Nah.", 330, 290);
  }
}
function scene37() {
  fill(0, 0, 255);
  text("It's going to be a tough year.", 180, 200);
   if(fa==100 && se==65&& fr==60&&so==30){
    fa=100;
    se=35;
    fr=50;
    so=40;
  }
    if(fa==100 && se==85&& fr==40&&so==60){
    fa=100;
    se=55;
    fr=30;
    so=70;
  }
    if(fa==55 && se==95&& fr==60&&so==30){
    fa=65;
    se=65;
    fr=50;
    so=40;
  }
    if(fa==60 && se==25&& fr==40&&so==20){
    fa=70;
    se=0;
    fr=30;
    so=30;
  }
}
function scene38() {
  fill(0, 0, 255);
  text("You have a ok year, but nothing outstanding", 160, 200);
   if(fa==100 && se==65&& fr==60&&so==30){
    fa=100;
    se=65;
    fr=70;
    so=30;
  }
    if(fa==100 && se==85&& fr==40&&so==60){
    fa=100;
    se=85;
    fr=50;
    so=60;
  }
    if(fa==55 && se==95&& fr==60&&so==30){
    fa=55;
    se=95;
    fr=70;
    so=30;
  }
    if(fa==60 && se==25&& fr==40&&so==20){
    fa=60;
    se=25;
    fr=30;
    so=20;
  }
}
function scene39() {
  text("AP Program", 30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  text("You need a midterm topic.",190,60);
  if (mouseX < 300) {
    fill(255, 203, 125);
    square(200, 200, 220);
    fill(255, 170, 51);
    square(200, 200, 200);
    // image(talkimg, 100, 100);
    textSize(25);
    fill(250);
    text("Cloning!", 175, 290);
  }
  if (mouseX > 300) {
    fill(0, 0, 255);
    square(400, 200, 220);
    fill(0, 55, 179);
    square(400, 200, 200);
    // image(notalkimg, 300, 100);
    textSize(25);
    fill(250);
    text("Give up.", 330, 290);
  }
}
function scene40() {
  fill(0, 0, 255);
  text("You made a outstanding speech!", 160, 200);
}
function scene41() {
  fill(0, 0, 255);
  text("You drop your class before midterm.", 160, 200);
}

function scene101() {
    text("You ran away from home and lived by yourself.", 100-20, 210-40);
    text("Even though struggling, you are able to support yourself", 60-40, 240-40);
    text("However, your low self-esteem eventually killed you.", 80-30, 270-40);
    text("You committed suicide.", 180, 300-40);
  text("at the age of 21 because of despression.",100, 330-40)

  }
function scene102() {
  text("You have no self-esteem", 140, 210-40);
    text("You think you are useless, and worst", 100, 240-40);
    text("One day, you jumped off the train", 50-30, 270-40);
    text("at the age of 21.", 30, 300-40);
  }
function scene103() {
    text("You lost your moral standard.", 140, 210-40);
    text("Violence, lying, manipulating excites you.", 100, 240-40);
    text("You died of a bloody fight with others at the age of 21", 50-30, 270-40);
    text("Because of your sins, you will suffer in eternal hell", 30, 300-40);
  }
function scene104() {
    text("You lost all your friends.", 180, 210-40);
    text("At the age of 21, you were found dead in the street.", 30, 240-40);
    text("The police said you were beaten to death.", 90, 270-40);
    text("Your parents knew you were killed by the bullies.", 80-30, 300-40);
    text("But, they didn't have enough evidence.", 110, 330-40);
  }
