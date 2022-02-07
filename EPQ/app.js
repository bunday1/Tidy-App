window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || 
window.msIndexedDB;
 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || 
window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}




// Arrays of 
var categoryItems = [ 
    // 2D array of all categoryItems
    // Each category contains the specifics of what to tidy

    // Rhymes with
    [
        "Block",
        "Dirt", 
        "Flop",
        "Cup"
    ],

    // Colours
    [
        "Blue",
        "Yellow",
        "Grey",
        "Beige",
        "Red",
        "Green",
    ],

    // Misc.
    [
        "Your favourite thing",
        "A thing you don't like",
        "A thing you wear",
        "Something you ate",
    ],
]

var categories = [
    "Rhymes with:",
    "A thing that is the colour:",
    "Tidy:",
]

var locations = [
    "Bathroom",
    "Floor",
    "Bed",

]

goalNum = document.getElementById("tidyGoal")
goalSubmit = document.getElementById("goalSubmit").addEventListener("click", goalFunc)
var goal = goalNum.value

function goalFunc(e) {
    e.preventDefault();
    goal = parseInt(goalNum.value)
    if (!goal) {
        goal = 1
        alert("Enter number for your goal")
    }
    console.log(goalNum)
    console.log("goal" + goal)
    console.log(typeof goal)
}

// If the value stored as locations has not been set yet, it is set in local storage
if (JSON.parse(localStorage.getItem("locations")) == undefined) {
    localStorage.setItem("locations", JSON.stringify(locations));
}
// The value stored as locations is retrieved from local storage
var locs = JSON.parse(localStorage.getItem("locations"))

// localStorage.setItem("categories", JSON.stringify(categories));
// localStorage.setItem("categoryItems", JSON.stringify(categoryItems));
// localStorage.setItem("rhyme", JSON.stringify(categoryItems[0]));
// localStorage.setItem("colours", JSON.stringify(categoryItems[1]));
// localStorage.setItem("misc", JSON.stringify(categoryItems[2]));



// Declaring Variables
var para = document.getElementById("random");
var loc = document.getElementById("location");
var counter = document.getElementById("count");
var reward = document.getElementById("reward");

// localStorage.setItem("tidied", "")
// Tidied is retrieved from localstorage
var x = parseInt(localStorage.getItem("tidied"));
// If it is null or undefined, it won't do anything
if (!x) {
}
// Otherwise, the counter text is updated  
else { 
    counter.innerText = "Tidied today: " + x
}



// Buttons are retrieved from html for use in DOM
// Buttons that shouldn't be accessed yet are disabled
var catButton = document.getElementById("catButton");
catButton.disabled = true 
// When button is clicked, run the relevant function
catButton.addEventListener('click', func);

var thingButton = document.getElementById("thingButton");
thingButton.disabled = true // Second button cannot be pressed yet
thingButton.addEventListener('click',item)

var locButton = document.getElementById("locButton");
locButton.addEventListener('click', randLoc)

// var doneButton = document.getElementById("done");
// doneButton.disabled = true
// doneButton.addEventListener('click', doneFunc)

var skipButton = document.getElementById("skip");
skipButton.disabled = true       
skipButton.addEventListener('click', skipFunc)

function randomNum(num) {
    // Returns random integer
    return Math.floor(Math.random() * num)
}

function func(e) {
    e.preventDefault() // Stops refreshing
    // Resets category when new one is chosen
    para.innerText = "" 
    catNum = category()
}

function randLoc(e) {
    // Randomly chooses a location from the list
    e.preventDefault();
    let locNum = randomNum(locs.length)
    // Shows user chosen location and enables next buttons
    loc.innerText = "Location: " + locs[locNum]
    catButton.disabled = false
    skipButton.disabled = false
    
    // para.innerText = "" 
}

function category() {
    // Randomly chooses category
    var catNum = randomNum(categoryItems.length);
    console.log("category "+catNum)

    // Displays on screen relevant message, enables second button
    para.innerText = categories[catNum]
    thingButton.disabled = false

    // Returns the category number
    return catNum
}

function item() {
    // Randomly chooses item within given category, displays it
    let itemNum = randomNum(categoryItems[catNum].length)
    para.innerText = para.innerText + " " + categoryItems[catNum][itemNum]
    locButton.disabled = true
    catButton.disabled = true
    thingButton.disabled = true // Second button is disabled again
    // doneButton.disabled = false
    slider.disabled = false
}

function doneFunc(e) {
    // e.preventDefault();
    locButton.disabled = false
    // doneButton.disabled = true
    slider.disabled = true
    skipButton.disabled = true
    // Resets messages on page
    loc.innerText = "It's time to tidy!"
    para.innerText = "You've got this!"
    // Retrieves tidied value
    var x = parseInt(localStorage.getItem("tidied"));
    
    if (!x) {
        // If value is null, sets it as 0
        var x = 0
        localStorage.setItem("tidied", x.toString())
    }
    
    
    var x = parseInt(localStorage.getItem("tidied"))
    // Increments x by 1, updates user
    x += 1 
    console.log("x"+x)
    // goal = getGoal()
    console.log("goal "+goal)
    if (x >= goal){
        var x = 0
        alert("Congratulations! You reached your goal of " + goal + " things!")
    }
    localStorage.setItem("tidied", x.toString())
    counter.innerText = "Tidied today: " + x
    if (x % 5 == 0 && x !=0) {
        // Every 5 things tidied the user is given a motivating message
        reward.innerText = "Well done! " + x + " already! Keep going!"
    } else {
        reward.innerText = ""
    }


}


function skipFunc(e) {
    // Resets buttons and text values to start again
    skipButton.disabled = true
    // doneButton.disabled = true
    slider.disabled = true
    locButton.disabled = false
    catButton.disabled = true
    thingButton.disabled = true
    loc.innerText = "It's time to tidy!"
    para.innerText = "You've got this!"
}


//slider stuff
var slider = document.getElementById("doneSlider")
slider.disabled = true
slider.onchange = function () {
    console.log(slider.value)
    if (slider.value < 100){
        slider.value = 1;
    } else {
        doneFunc();
        slider.value = 1;
    }
}







// const table = [
//     {
//         id: "01",
//         name: "Josh",
//         score: 10,
//     }
// ];

// var db;
// var request = window.indexedDB.open("newDatabase", 1);
// request.onerror = function(event) {
//     console.log("Error: ")
// }
// request.onsuccess = function(event) {
//     db = request.result;
//     console.log("success: " + db)
// }
// request.onupgradeneeded = function(event) {
//     var db = event.target.result;
//     var objectStore = db.createObjectStore("user", {keyPath: "id"})

//     for (var i in table) {
//         objectStore.add(table[i])
//     }
// }

// function read() {
//     var transaction = db.transaction(["user"]);
//     var objectStore = transaction.objectStore("user")
//     var searchId = "01"
//     var request = objectStore.get(searchId)

//     request.onerror = function(event) {
//         alert("Unable to retrieve data from database")
//     }

//     request.onsuccess = function(event) {
//         if (request.result) {
//             alert("Score: " + request.result.score)
//             var num = request.result.score
//         } else {
//             alert("User " + searchId + " could not be found")
//         }
//         return num
//     }
// }

// function update() {
//     async function function1(){
//         return new Promise(function(resolve, reject){
//             var transaction = db.transaction(["user"]);
//             var objectStore = transaction.objectStore("user")
//             var searchId = "01"
//             var request = objectStore.get(searchId)
        
//             request.onsuccess = function(event) {
//                 resolve(request.result)
//             }
//         })
//     }

//     console.log(function1.then(function(result)))

//     // var transaction = db.transaction(["user"]);
//     // var objectStore = transaction.objectStore("user")
//     // var searchId = "01"
//     // var request = objectStore.get(searchId)

//     // request.onsuccess = function(event) {
//     // }
//     // console.log(globalThis.oldScore)
    


//     userObject = {
//         id: "01",
//         name: "Josh",
//         score: 0//oldScore + 1,
//     }

//     var trans = db.transaction(["user"], "readwrite")
//     var store = trans.objectStore("user");
//     var request = store.put(userObject)

//     request.onsuccess = function(e){
//         console.log("hell")
//     }

//     // var request = db.transaction(["user"], "readwrite").objectStore("user").add(
//     //     {
//     //         id: "01",
//     //         name: "Josh",
//     //         score: globalThis.oldScore + 1,
//     //     }
//     // )
// }



