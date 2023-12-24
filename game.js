let button = document.querySelectorAll(".box");
let reset = document.querySelector(".js-reset");
let msgcontainer = document.querySelector(".result");
let msg = document.querySelector(".js-message");
let new_game = document.querySelector(".new-game");

let turnO = true;
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let enabled = ()=>{
    for(let element of button){
        element.disabled = false;
        msgcontainer.classList.add("hide");
    }
}
let disabled = ()=>{
    for(let element of button){
        element.disabled = true;
    }
}

let reset_game = ()=>{
    turnO = true;
    for(let element of button){
        element.innerHTML = "";
    }
    enabled();

};

button.forEach((element)=>{
    element.addEventListener("click",()=>{
    console.log("box was clicked")
    if(turnO){
        element.innerHTML = "O";
        turnO = false;
    }
    else{
        element.innerHTML = "X";
        turnO = true;
    }
    element.disabled = true;
    checkwin();
    })   
})

let dispaly = (winner)=>{
    disabled();
    msg.innerHTML = `The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
const checkwin = ()=>{
    for( let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     button[pattern[0]].innerText,
        //     button[pattern[1]].innerText,
        //     button[pattern[2]].innerText);
        let pos1 = button[pattern[0]].innerText;
        let pos2 = button[pattern[1]].innerText;
        let pos3 = button[pattern[2]].innerText;

        if( pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1===pos2 && pos2 === pos3){
                console.log("winner",pos1);
                dispaly(pos1);
                break;
            }
        }   
    }
}

new_game.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);