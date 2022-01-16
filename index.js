//Detecting mouse click

var numberOfButtons = document.querySelectorAll(".drum").length; // returns no.of classeswith this name
for(var i = 0;i < numberOfButtons;i++)
{ 
     // Whenever a button is clicked , function() is claaed
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()  // in this case we can create a function like this. It is called anonymous function. If we use a named function(normal function) then here we dont have to write () at the end of fucntion call.
    {
        var buttonInnerHTML = this.innerHTML; // "this" used there tells us which button on the screen was clicked by mouse and it stores its innerHTML in variable.
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML); // this function is defined at the bottom.
    }); // closing bracket of addEventListener()
}

//Detecting Keyboard press.
// for whole of document.

document.addEventListener("keydown",function(event){  // event is the argument.We can give it any name ofour choice and not necessarily "event".
    makeSound(event.key); // key property of event

    buttonAnimation(event.key);
});



function makeSound(key)
{
    switch(key)
        {
            case "w":
                {
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();  // when we click a button audio plays
                    break;
                }
                
            case "a":
                {
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();  
                    break;
                } 
            case "s":
                {
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play(); 
                    break; 
                } 
            case "d":
                {
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();  
                    break;
                } 
            case "j":
                {
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();  
                    break;
                } 
            case "k":
                {
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();  
                    break;
                }  
            case "l":
                {
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();  
                    break;
                }  

            default: console.log(buttonInnerHTML); 
        }
}

function buttonAnimation(currentkey)  // we add animation to the drum key pressed
{
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed"); // check css of .pressed to see its effects

    setTimeout(function(){          // setTimeout is a built-in function. It executes our defined function after 100 miliseconds.
        activebutton.classList.remove("pressed");
    },100);
}