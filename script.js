var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var over = false;

function mineBuild() {
  allwhite();
  
  var r = Math.floor(Math.random() * 6 + 1);
  var c = Math.floor(Math.random() * 6 + 1);
  mine = r + "" + c;

  p1 = r - 1 + "" + (c - 1);
  p2 = r - 1 + "" + c;
  p3 = r - 1 + "" + (c + 1);
  p4 = r + "" + (c - 1);
  p5 = r + "" + (c + 1);
  p6 = r + 1 + "" + (c - 1);
  p7 = r + 1 + "" + c;
  p8 = r + 1 + "" + (c + 1);
}

function press(obj) {
  if (over == false) {
    var user_press = Number(obj.id);

    if (user_press == mine) {
      gameoversound();
      gameOverDispaly();
      obj.style.backgroundColor = "red";
      obj.innerHTML = "BOOM";
    } else if (
      user_press == p1 ||
      user_press == p2 ||
      user_press == p3 ||
      user_press == p4 ||
      user_press == p5 ||
      user_press == p6 ||
      user_press == p7 ||
      user_press == p8
    ) {
      playclick();
      obj.style.backgroundColor = "red";
    } else {
      playclick();
      obj.style.backgroundColor = "cyan";
    }
    gameWin();
  }
}

function gameOverDispaly() {
  over = true;
  for (let index = 0; index < 36; index++) {
    document.getElementsByClassName("cell")[index].style.backgroundColor = "red";
    document.getElementsByClassName("cell")[index].style.color = "white";
  }

  document.getElementById("32").innerHTML = "G";
  document.getElementById("33").innerHTML = "A";
  document.getElementById("34").innerHTML = "M";
  document.getElementById("35").innerHTML = "E";

  document.getElementById("42").innerHTML = "O";
  document.getElementById("43").innerHTML = "V";
  document.getElementById("44").innerHTML = "E";
  document.getElementById("45").innerHTML = "R";
  document.getElementById("winOrNot").innerHTML = "Sorry, You click the Boom. Let's Play Again";
}

function gameWin() {
    var count = 0;
    for (let index = 0; index < 36; index++) {
      var color = document.getElementsByClassName("cell")[index].style.backgroundColor;
      if (color == "white") count++;
    }

    if (count == 1){
      over = true;
      for (let i = 0; i < 36; i++) {
        document.getElementsByClassName("cell")[i].style.backgroundColor = "cyan";
        document.getElementsByClassName("cell")[i].style.color = "white;"
        
      }
  
    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";
  
    document.getElementById("42").innerHTML = "W";
    document.getElementById("43").innerHTML = "i";
    document.getElementById("44").innerHTML = "n";
    document.getElementById("45").innerHTML = "!";
    document.getElementById("winOrNot").innerHTML = "Good Job! You Win The Game";
    gameWinSound();
  }
}

  function allwhite() {
    for (let index = 0; index < 36; index++) {
      document.getElementsByClassName("cell")[index].style.backgroundColor = "white";
      
    }
  }

  function playclick() {
    var audio = document.getElementById("clickvoice");
    audio.play();
  }
  function gameWinSound() {
    var audio = document.getElementById("gameWin");
    audio.play();
  }
  
  function gameoversound() {
    var audio = document.getElementById("gameover");
    audio.play();
  }
  function restartbtn() {
    location.reload();
  }