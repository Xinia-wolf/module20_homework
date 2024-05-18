// Create a "close" button and append it to each list item
let nodelist: NodeListOf<Element> | null = document.getElementsByTagName(
  "LI"
) as unknown as NodeListOf<Element>;
let indexOfNodeList: number;
for (
  indexOfNodeList = 0;
  indexOfNodeList < nodelist.length;
  indexOfNodeList++
) {
  let span: HTMLSpanElement = document.createElement("SPAN");
  let txt: Text | null = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[indexOfNodeList].appendChild(span);
}

// Click on a close button to hide the current list item
function createCloseElementsArray(): void {
  console.log("Функция вызвалась!");
  let closeElementsArray: HTMLElement[] = Array.prototype.slice
    .call(document.getElementsByClassName("close"), 0)
    .map((el) => el as HTMLElement);
  for (
    let indexOfCloseElements = 0;
    indexOfCloseElements < closeElementsArray.length;
    indexOfCloseElements++
  ) {
    closeElementsArray[indexOfCloseElements].onclick = function (
      event: MouseEvent
    ): void {
      event.preventDefault();
      console.log(closeElementsArray);
      if (event.target) {
        let eventTarget: HTMLElement = event.target as HTMLElement;
        let div: HTMLElement | null = eventTarget.parentElement;
        if (div) {
          div.style.display = "none";
        }
      }
    };
  }
}

createCloseElementsArray();

// Add a "checked" symbol when clicking on a list item
let listElement: HTMLUListElement | null = document.querySelector("ul");
if (listElement) {
  listElement.addEventListener("click", (ev): void => {
    if (ev.target) {
      const targetElement = ev.target as Element;
      if (targetElement.tagName === "LI") {
        targetElement.classList.toggle("checked");
      } else false;
    }
  });
}

// Create a new list item when clicking on the "Add" button
const addNewElement = (): void => {
  let li: HTMLLIElement = document.createElement("li");
  let myInput = document.getElementById("myInput") as HTMLInputElement;
  if (!myInput) {
    throw new Error("Element with id 'myInput' not found");
  }
  let inputValue: string = myInput.value;
  if (inputValue !== "") {
    let t: Text | null = document.createTextNode(inputValue);
    li.appendChild(t);
  } else {
    alert("You must write something!");
    return;
  }
  if (document.getElementById("myUL")) {
    document.getElementById("myUL")!.appendChild(li);
    myInput.value = "";
    let span: HTMLSpanElement = document.createElement("SPAN");
    let txt: Text | null = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    createCloseElementsArray();
  };
};
