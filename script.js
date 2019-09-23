var popoverElement = document.getElementById("popover");
var mainContainer = document.getElementById("main-container");
var title = document.getElementById("popoverTitle");
var text = document.getElementById("popoverText");
var popoverOpen = 0;

function popover(word) {

    if (word == "respect") {
        title.innerText="Respect";
        text.innerText="This is a test";
        popoverElement.style.backgroundColor = "#cc0000";
    }
    
    popoverElement.style.height = "40%";
    mainContainer.style.marginBottom = "20vh";
    popoverOpen = 1;
}

function closePopover() {
    popoverElement.style.height = "0px";
    mainContainer.style.marginBottom = "0px";
    popoverOpen = 0;
}