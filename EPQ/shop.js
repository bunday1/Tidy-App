var bgColour = document.getElementById("bgColour")
var txtColour = document.getElementById("txtColour")
var bgColourSub = document.getElementById("bgColourSubmit")
var txtColourSub = document.getElementById("txtColourSubmit")
bgColourSub.addEventListener('click', func(bgColour))
txtColourSub.addEventListener('click', func(txtColour))




function func(select){
    return function curriedFunc(e) {

        //Add function here that checks if user has enough score to buy the colour changes


        e.preventDefault();
        var val = select.options[select.selectedIndex].value
        console.log(val)
        var property = select.name
        // console.log(property)
        if(property == "backgroundColor"){
            // document.body.style.backgroundColor = val

            if (val == "pink"){
                document.body.style.backgroundImage = "url('img/pinkBG.jpg')"
                document.body.style.backgroundColor = "rgb(248, 165, 237)"
            } else if (val == "blue"){
                document.body.style.backgroundImage = "url('img/blueBG.jpg')"
                document.body.style.backgroundColor = "rgb(95, 149, 156)"
            } else if (val == "green") {
                document.body.style.backgroundImage = "url('img/greenBG.jpg')"
                document.body.style.backgroundColor = "rgb(90, 199, 144)"
            } else if (val == "red") {
                document.body.style.backgroundImage = "url('img/redBG.jpg')"
                document.body.style.backgroundColor = "rgba(180, 3, 3, 0.747)"
            } else if (val == "burlywood") {
                document.body.style.backgroundImage = "url('img/desert.jpg')"
                document.body.style.backgroundColor = "burlywood"
            }

        } else if (property == "color"){
            document.body.style.color = val
        }
        
    }
}