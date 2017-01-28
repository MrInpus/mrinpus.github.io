var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/smile.jpeg'){
        myImage.setAttribute('src','images/smile2.png');       
    } else {
        myImage.setAttribute('src','images/smile.jpeg');
    }
}

var myButon = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'My page is cool, ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'My page is cool, ' + storedName;
}

myButon.onclick = function(){
    setUserName();
}