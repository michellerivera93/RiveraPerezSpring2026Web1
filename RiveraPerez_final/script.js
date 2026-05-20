function dragElement(deliItem) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;

    deliItem.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        deliItem.style.top = (deliItem.offsetTop - pos2) + "px";
        deliItem.style.left = (deliItem.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById("item1"));
dragElement(document.getElementById("item2"));
dragElement(document.getElementById("item3"));
dragElement(document.getElementById("item4"));
dragElement(document.getElementById("item5"));
dragElement(document.getElementById("item6"));
dragElement(document.getElementById("item7"));
dragElement(document.getElementById("item8"));
dragElement(document.getElementById("item9"));
dragElement(document.getElementById("item10"));
dragElement(document.getElementById("item11"));

let cat = document.getElementById("cat");
let speechBox = document.getElementById("speech-box");

cat.onclick = function () {
    if (speechBox.style.display == "block") {
        speechBox.style.display = "none";
    } else {
        speechBox.style.display = "block";
    }
};