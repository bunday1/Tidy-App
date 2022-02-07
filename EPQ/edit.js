// List of locations are retrieved
var retrieveLocs = JSON.parse(localStorage.getItem("locations"))
console.log(retrieveLocs)

// Retrieves list for DOM
var locList = document.getElementsByTagName('ul')[0]
console.log(locList)
locList.addEventListener("click", removeFunc)

// Loops through each location and adds it to the list on screen
for (let i=0; i < retrieveLocs.length; i++) {
    var newElement = document.createElement("li")
    newElement.innerText = retrieveLocs[i]
    locList.appendChild(newElement)
}

var subButton = document.getElementById("submit")
subButton.addEventListener('click', submitFunc)



function submitFunc(e) {
    e.preventDefault();
    // Takes the value entered in the text box
    var new1 = (document.getElementById("add").value)
    // Capitalises only first letter
    new1 = new1.charAt(0).toUpperCase() + new1.substring(1).toLowerCase()
    console.log(new1)
    // Creates new list item
    var newElement = document.createElement("li")
    newElement.innerText = new1
    
    // If user entered something, item is added on to end of list
    if (new1 != "") {
        retrieveLocs.push(new1)
        locList.appendChild(newElement)
        document.getElementById("add").value = ""
    }
    console.log(retrieveLocs)
    localStorage.setItem("locations", JSON.stringify(retrieveLocs));

}

function removeFunc(e) {
    //If there is more than one item in the list
    if ((locList.getElementsByTagName("li").length) > 1) {
        // The item that is clicked is removed
        e.target.remove()
        console.log(e.target.innerText)
        //Removes item from array at given index
        retrieveLocs.splice(retrieveLocs.indexOf(e.target.innerText), 1)
        console.log(retrieveLocs)
        localStorage.setItem("locations", JSON.stringify(retrieveLocs));
    }
    
}


var presetArr = 
[
    [
        "Kitchen",
        "Living Room",
        "Bathroom",
        "Bedroom",
    ],
    
    [
        "Bed",
        "Desk",
        "Floor",
        "Drawer",
    ],

    [
        "Oven",
        "Counter",
        "Floor",
        "Cupboard",
        "Fridge",
    ]
]

var presets = document.getElementsByClassName("preset")
// console.log(presets[0].textContent)
for (var i = 0; i < presets.length; i++) {
    presets[i].addEventListener("click", presetFunc)
}

function presetFunc(e) {
    e.preventDefault()
    
    var presets = document.getElementsByClassName("preset")
    for (var i = 0; i < presets.length; i++) {
        presets[i].style.color = "black"
    }

    console.log(presets[e.target.innerText[7]])
    presets[(e.target.innerText[7])-1].style.color = "blue"
    console.log(e.target.innerText[7])
    var presetNum = parseInt(e.target.innerText[7]) - 1
    console.log(presetNum)
    console.log(presetArr[presetNum])
    localStorage.setItem("locations", JSON.stringify(presetArr[presetNum]))
    location.reload()
}