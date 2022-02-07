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
        console.log(property)
        if(property == "backgroundColor"){
            document.body.style.backgroundColor = val
        } else if (property == "color"){
            document.body.style.color = val
        }
        
    }
}