function onClickButton(){
    document.getElementById("js-inject").innerHTML = window.prompt("What do you want to enter");
}

function tryDocWrite(){
    // Using document.write() after an HTML page is loaded will remove all the existing HTML.
    document.write(4+8);
}

function consoleLog(){
    console.log(window.prompt("Write something to console"))
}