/* --------------------OVERLAY-------------------- */

var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        setTimeout(function () {
          document.getElementById("myProgress").style.display = "none";
          document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0)";
          // document.getElementById("overlay").style.removeProperty = "backgroundcolor";
          document.getElementById("text").style.opacity = "1";
          document.getElementById("text").style.zIndex = "100";
          document.getElementById("overlay").style.cursor = "pointer";
          document.getElementById("overlay").style.pointerEvents = "all";
        }, 10);
      } else {
        width++;
        document.getElementById("myBar").style.width = width + "%";
      }
    }
  }
}

window.onload = setTimeout(move, 500);

function overlay_off() {
  document.getElementById("overlay_right").style.width = "0";
  document.getElementById("overlay_left").style.width = "0";
  document.getElementById("text").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("overlay").style.display = "none";
    typeWriter();
  }, 1000);
}

/* --------------------PARALLAX-------------------- */

var i = 0;
var txt = "Je suis Chandler NGUYEN Élève de Bachelor Informatique à Sophia Ynov Campus";

function typeWriter() {
  if (i < txt.length) {
    if (i == 7) {
      document.getElementById("presentation").innerHTML += "<br>";
    }
    if (i == 23) {
      document.getElementById("presentation").innerHTML += "<br><br>";
    }
    document.getElementById("presentation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
  else{
    document.getElementById("scroll").style.overflow = "visible";
    document.getElementById("Arr").style.display = "block";
  }
}

/* --------------------MAIN BURGER-------------------- */

function burger_menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* --------------------SIDE BURGER-------------------- */

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myTopnav").style.height = "0";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myTopnav").style.height = "70px";
}

/* --------------------MODAL-------------------- */

var modal;

function img(i) {
  switch (i) {
    case 0: modal = document.getElementById("git");
            modal.style.display = "block"; break;
    case 1: modal = document.getElementById("the_prison");
            modal.style.display = "block"; break;
    case 2: modal = document.getElementById("dessinator");
            modal.style.display = "block"; break;
    case 3: modal = document.getElementById("portfolio_php");
            modal.style.display = "block"; break;
  }
  document.getElementById("scroll").style.overflow = "hidden";
}

function close_modal() {
  modal.style.display = "none";
  document.getElementById("scroll").style.overflow = "visible";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("scroll").style.overflow = "visible";
  }
}

function screen_shot(i){
  var photo;
  switch (i){
    case 1: photo = document.getElementById("photo1"); break;
    case 2: photo = document.getElementById("photo2"); break;
    case 3: photo = document.getElementById("photo3"); break;
  }
  if(photo.style.height == "30vw")
  {
    photo.style.height = "8vw";
  }
  else
  {
    photo.style.height = "30vw";
  }
}

/* --------------------ON_SCROLL-------------------- */

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

var position_top          = document.getElementById("parallax").offsetTop;
var position_parcours     = document.getElementById("Parcours").offsetTop;
var position_competences  = document.getElementById("Compétences").offsetTop;
var position_travaux      = document.getElementById("Travaux").offsetTop;
var position_contact      = document.getElementById("foot").offsetTop;

window.onscroll = function () {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }

  if (window.scrollY >= position_top) {
    document.getElementById("nav_Parcours").classList.remove("active");
    document.getElementById("side_Parcours").classList.remove("active");
  }
  if (window.scrollY >= position_parcours-100) {
    document.getElementById("nav_Parcours").classList.add("active");
    document.getElementById("nav_Compétences").classList.remove("active");
    document.getElementById("side_Parcours").classList.add("active");
    document.getElementById("side_Compétences").classList.remove("active");
  }
  if (window.scrollY >= position_competences-100) {
    document.getElementById("nav_Parcours").classList.remove("active");
    document.getElementById("nav_Compétences").classList.add("active");
    document.getElementById("nav_Travaux").classList.remove("active");
    document.getElementById("side_Parcours").classList.remove("active");
    document.getElementById("side_Compétences").classList.add("active");
    document.getElementById("side_Travaux").classList.remove("active");
  }
  if (window.scrollY >= position_travaux-100) {
    document.getElementById("nav_Compétences").classList.remove("active");
    document.getElementById("nav_Travaux").classList.add("active");
    document.getElementById("nav_Contact").classList.remove("active");
    document.getElementById("side_Compétences").classList.remove("active");
    document.getElementById("side_Travaux").classList.add("active");
    document.getElementById("side_Contact").classList.remove("active");
  }
  if (window.scrollY >= position_contact-300) {
    document.getElementById("nav_Travaux").classList.remove("active");
    document.getElementById("nav_Contact").classList.add("active");
    document.getElementById("side_Travaux").classList.remove("active");
    document.getElementById("side_Contact").classList.add("active");
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("my_prog").style.width = scrolled + "%";
};