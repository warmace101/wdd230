const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function addFavChap(){
    var favChap = document.getElementById("favChap").ariaValueMax;
    if (newScript != ""){
        var listItem = document.createElement("li");
        listItem.textContent = favChap
        document.getElementById("list").appendChild(listItem);
        document.getElementById("favChap").value = "";
    }
    else {
        alert("Please enter a scripture before attempting to add one")
    }
}