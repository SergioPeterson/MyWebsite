
let srcolltrackCount = 0;
let scrolltrackValue = 0;
const sections = document.getElementsByClassName("section");
let currentSection = 0;




function updatePage(value){
    if(value == "down"){
        if(currentSection != sections.length-1){
        sections[currentSection].classList.toggle("active");
        sections[currentSection+1].classList.toggle("active");
        currentSection = currentSection+1;

        }
    }else if(value == "up"){
        if(currentSection != 0){
            sections[currentSection].classList.toggle("active");
            sections[currentSection-1].classList.toggle("active");
            currentSection = currentSection-1;
        }
        
    }else if(value == "stay"){

    }
}



// function updateScroll(value){
//     if(srcolltrackCount == 10){
//         return "down";
//     }else if(srcolltrackCount == -10){
//         return "up";
//     }else if(value > scrolltrackValue){
//         srcolltrackCount = srcolltrackCount+1;
//     }else if(value < scrolltrackValue){
//         srcolltrackCount = srcolltrackCount-1;
//     }
//     return "stay"
// }