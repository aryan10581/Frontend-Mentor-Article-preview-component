let btn = document.getElementById("btn");
let share = document.getElementById("share-btn");
let info = document.getElementById("bot");
let wh = document.getElementById("share");
btn.addEventListener("mouseover", function () {
  share.style.display = "flex";
  info.style.margin = "-4vh 0vh 0vh ";
  btn.style.backgroundColor = "#48556a";

  wh.style.filter = "brightness(0) invert(1)";
});
btn.addEventListener("mouseout", function () {
  share.style.display = "none";
  info.style.margin = "4vh 0vh 0vh ";
  btn.style.backgroundColor = "#ecf2f8";
  wh.style.filter = "brightness(1) invert(0)";
});
