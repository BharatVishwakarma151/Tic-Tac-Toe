let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#newBtn")
let msg = document.querySelector("#message")
let msgContainer = document.querySelector(".msg-container")
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

console.log(boxes)
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked!")
        // box.innerText = "B"
        if (turnO) {
            box.innerText = "O"
            turnO = false
            box.style.color= "red"
        }
        else{
            box.innerHTML= "X"
            turnO = true
        }
        box.disabled = true
        checkWinner();
    });
});
const disableBoxes =()=>
{
    for ( box of boxes) {
        box.disabled = true
    }
}

const enableBoxes =()=>
{
    for ( box of boxes) {
        box.disabled = false
        box.innerText = ""
        msgContainer.classList.add("hide")
        box.style.color = "rgb(33, 207, 184)";
    }
};
const showWinner=(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
}
const resetGame =()=>{
    turnO = true
    enableBoxes();
    
    
}
const checkWinner = () =>{
for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;



if(pos1Val != "" && pos2Val !="" && pos3Val!=""){
    if (pos1Val==pos2Val && pos2Val==pos3Val) {
        console.log("Winner",pos2Val);
        showWinner(pos1Val);
    }
}
};
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)
