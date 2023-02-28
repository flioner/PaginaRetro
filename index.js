let logo;

(function main() {
  logo = document.getElementById("dvd");
  randColor();
  update();
})();

function update() {
  setTimeout(() => {
    logo.style.backgroundColor = logoColor;
    checkHitBox();
    update();
  }, 30);
}

function checkHitBox() {
  //console.log(logo.x);
  if (logo.x + 10 >= window.innerWidth || logo.x <= 10) {
    randColor();
  }

  if (logo.y + 10 >= window.innerHeight || logo.y <= 10) {
    randColor();
  }
}

function randColor() {
  r = Math.random() * (254 - 0) + 0;
  g = Math.random() * (254 - 0) + 0;
  b = Math.random() * (254 - 0) + 0;

  logoColor = "rgb(" + r + "," + g + ", " + b + ")";
}

function loadAjax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var img = document.createElement("img");
    img.src = this.responseURL;
    img.style.height = "40vh";
    document.getElementById("ajax").appendChild(img);
  };
  xhttp.open("GET", "public/perfil.jpg");
  xhttp.send();
}

function loadJQuery() {
  var video = $("<iframe/>", {
    id: "video",
    src: "https://youtube.com/embed/DmAXxUAx7Jw",
    width: "65vw",
    height: "37vw",
    allowfullscreen: "",
  });
  video.appendTo($("#jquery"));
}
