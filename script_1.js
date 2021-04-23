function onClickButton(){
    document.getElementById("js-inject").innerHTML = "Showed after clicking button";
}

function tryDocWrite(){
    // Using document.write() after an HTML page is loaded will remove all the existing HTML.
    document.write(4+8);
}

function alertUser(){
    window.alert("Alerting User!!")
}

function consoleLog(){
    console.log(window.prompt("Write something to console"))
}