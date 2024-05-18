// Create a "close" button and append it to each list item
var nodelist = document.getElementsByTagName("LI");
var indexOfNodeList;
for (indexOfNodeList = 0; indexOfNodeList < nodelist.length; indexOfNodeList++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    nodelist[indexOfNodeList].appendChild(span);
}
// Click on a close button to hide the current list item
function createCloseElementsArray() {
    console.log("Функция вызвалась!");
    var closeElementsArray = Array.prototype.slice
        .call(document.getElementsByClassName("close"), 0)
        .map(function (el) { return el; });
    for (var indexOfCloseElements = 0; indexOfCloseElements < closeElementsArray.length; indexOfCloseElements++) {
        closeElementsArray[indexOfCloseElements].onclick = function (event) {
            event.preventDefault();
            console.log(closeElementsArray);
            if (event.target) {
                var eventTarget = event.target;
                var div = eventTarget.parentElement;
                if (div) {
                    div.style.display = "none";
                }
            }
        };
    }
}
createCloseElementsArray();
// Add a "checked" symbol when clicking on a list item
var listElement = document.querySelector("ul");
if (listElement) {
    listElement.addEventListener("click", function (ev) {
        if (ev.target) {
            var targetElement = ev.target;
            if (targetElement.tagName === "LI") {
                targetElement.classList.toggle("checked");
            }
            else
                false;
        }
    });
}
// Create a new list item when clicking on the "Add" button
var addNewElement = function () {
    var li = document.createElement("li");
    var myInput = document.getElementById("myInput");
    if (!myInput) {
        throw new Error("Element with id 'myInput' not found");
    }
    var inputValue = myInput.value;
    if (inputValue !== "") {
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
    }
    else {
        alert("You must write something!");
        return;
    }
    if (document.getElementById("myUL")) {
        document.getElementById("myUL").appendChild(li);
        myInput.value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        createCloseElementsArray();
    }
    ;
};
