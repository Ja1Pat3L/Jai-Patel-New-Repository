function addText() {
    
    let text = document.getElementById("header");
    text.innerHTML += " Have a good day !!";
}

if (window.addEventListener) {
    
    window.addEventListener("load", addText, false);
}
else if (window.attachEvent) {
    
    window.attachEvent("onload", addText);
}