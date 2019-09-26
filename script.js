var popoverElement = document.getElementById("popover");
var mainContainer = document.getElementById("main-container");
var title = document.getElementById("popoverTitle");
var text = document.getElementById("popoverText");
var popoverOpen = 0;

function popover(word) {
/*
    if (popoverOpen == 1) {
        closePopover();
    } else { */

        if (word == "respect") {
            title.innerText="Respect";
            text.innerText="Among other things, respecting the work of others involves crediting those who have influenced you and honoring their wishes when it comes to using and sharing their work.";
            popoverElement.style.backgroundColor = "#ef9a9a";
        }   else if (word == "share") {
            title.innerText="Share";
            text.innerText="Whenever possible, allow others to use and be influenced by your work, through permissive licences such as Creative Commons.";
            popoverElement.style.backgroundColor = "#ce93d8";
        }   else if (word == "human") {
            title.innerText="Human-Centered";
            text.innerText="The designer's focus is on the people - not their own motives or wishes, but what is best for the users.";
            popoverElement.style.backgroundColor = "#9fa8da";
        }   else if (word == "holistic") {
            title.innerText="Holistic";
            text.innerText="The comprehension of the parts of something, how they interconnect, and how they reference the whole. In the designer's case, this is Humans, their uniqueness, and humanitiy as a whole.";
            popoverElement.style.backgroundColor = "#81d4fa";
        }   else if (word == "manipulation") {
            title.innerText="Behavioral Manipulation";
            text.innerText="Using design to trick people into doing what you want them to do instead of helping them to do what they want to do.";
            popoverElement.style.backgroundColor = "#80cbc4";
        }   else if (word == "profit") {
            title.innerText="Pure Profitability";
            text.innerText="Holding profit above all else and designing based on what will make the most profit instead of what is right.";
            popoverElement.style.backgroundColor = "#c5e1a5";
        }   else if (word == "credit") {
            title.innerText="Credit";
            text.innerText="This oath is adapted from a similar oath by Jake Wells, Donovan Preddy, and Brian Peppler (Empathy Lab).";
            popoverElement.style.backgroundColor = "#aaaaaa";
        }


        
    
        popoverElement.style.height = "40%";
        mainContainer.style.marginBottom = "20vh";
        popoverOpen = 1;

    //}
}

function closePopover() {
    popoverElement.style.height = "0px";
    mainContainer.style.marginBottom = "0px";
    popoverOpen = 0;
}