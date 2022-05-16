const changeBody = document.body;

function handleWindowColor(){
    const windowWidth = window.innerWidth;
    console.log(changeBody);
    if(windowWidth > 650){
        changeBody.className = "bodyWide"
    } else if(windowWidth > 550 && windowWidth < 649){
        changeBody.className = "bodyMiddle"
    } else {
        changeBody.className = "bodyMini"
    }
}

window.addEventListener("resize", handleWindowColor)