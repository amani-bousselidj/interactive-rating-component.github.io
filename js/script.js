let selected = document.getElementById("feedBack").getElementsByTagName("div");

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", selectItem);
    selected[i].addEventListener("click", idontKnow);

}

function selectItem() {



    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove("checked-button");

    }
    this.classList.add("checked-button");
}
document.getElementById("button").addEventListener("click", sendFeedBack);

function sendFeedBack() {
    document.getElementById("contentOne").style.display = "none";
    document.getElementById("contentTwo").style.display = "grid";
    document.getElementById("contentOne").style.visibility = "hiden";
    document.getElementById("contentTwo").style.visibility = "visible";
}

function idontKnow() {
    for (i = 0; i < selected.length; i++) {
        document.getElementById("span").innerHTML = this.innerHTML;
    }
}