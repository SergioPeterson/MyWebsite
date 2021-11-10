const choose_section = document.getElementById("choose")
const fav_button = document.getElementById("fav_button");
const curr_button = document.getElementById("curr_button");
const old_button = document.getElementById("old_button");
const fav_section = document.getElementById("fav");
const curr_section = document.getElementById("current");
const old_section = document.getElementById("old");
const arrowback = document.getElementById("backarrow");


fav_button.addEventListener("click", function(){
    choose_section.style.display = "none";
    fav_section.style.display = "flex";
    curr_section.style.display = "none";
    old_section.style.display = "none";
    arrowback.style.display = "block";
})
curr_button.addEventListener("click", function(){
    choose_section.style.display = "none";
    fav_section.style.display = "none";
    curr_section.style.display = "flex";
    old_section.style.display = "none";
    arrowback.style.display = "block";
})
old_button.addEventListener("click", function(){
    choose_section.style.display = "none";
    fav_section.style.display = "none";
    curr_section.style.display = "none";
    old_section.style.display = "flex";
    arrowback.style.display = "block";
})
arrowback.addEventListener("click", function(){
    choose_section.style.display = "flex";
    fav_section.style.display = "none";
    curr_section.style.display = "none";
    old_section.style.display = "none";
    arrowback.style.display = "none";
})
    