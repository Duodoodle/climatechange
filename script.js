window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}
function active1() {
    document.getElementById("home").classList.add("active");
    document.getElementById("causes").classList.remove("active");
    document.getElementById("effects").classList.remove("active");
    document.getElementById("prevention").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function active2() {
    document.getElementById("causes").classList.add("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("effects").classList.remove("active");
    document.getElementById("prevention").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function active3() {
    document.getElementById("effects").classList.add("active");
    document.getElementById("causes").classList.remove("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("prevention").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function active4() {
    document.getElementById("prevention").classList.add("active");
    document.getElementById("causes").classList.remove("active");
    document.getElementById("effects").classList.remove("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("about").classList.remove("active");
}
function active5() {
    document.getElementById("about").classList.add("active");
    document.getElementById("causes").classList.remove("active");
    document.getElementById("effects").classList.remove("active");
    document.getElementById("prevention").classList.remove("active");
    document.getElementById("home").classList.remove("active");
}