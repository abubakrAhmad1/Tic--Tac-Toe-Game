//GETTING THE ELEMENTS
let buttons = document.querySelectorAll(".btn");
let resetButton = document.querySelector(".resetBtn");
let winnigHeading = document.querySelector(".winner-heading");

//THIS ARRAY CONTAINS THE INDECES WHICH ARE REQUIRE FOR WIN
const winArray =[
              [0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6],    ];

//VARIABLE TO DECIDE THE TURN OF THE PLAYER
let turnOfX = true;

//1ST
buttons.forEach( (btn)=> {

    btn.addEventListener("click", () => {
        if(turnOfX === true) {
            btn.innerText = "X";
            turnOfX = false;
            
        } else {
            btn.innerText = "O";
            turnOfX = true;
        }
        btn.disabled =true;
        winCheck();
    });
});

//2ND
resetButton.addEventListener("click",()=> {
    buttons.forEach((btn)=> {
        btn.innerText ="";
        btn.disabled=false;
    });
    winnigHeading.classList.add("hide");
});

//FUNCTION
const disableButtons = ()=> {

    buttons.forEach((btn) =>{
        btn.disabled = true;
    });
}
//FUNCTION
const displayWin = (winner) => {
    winnigHeading.classList.remove("hide");
    winnigHeading.innerText = `Congratulations ${winner} is the winner`;
}

//FUNCTION
const winCheck = () => {
    
    for(let i=0 ; i<winArray.length ; i++) {
        
        let val1 = buttons[winArray[i][0]].innerText;
        let val2 = buttons[winArray[i][1]].innerText;
        let val3 = buttons[winArray[i][2]].innerText;

        if (val1 != "" && val2 != "" && val3 !="" ) {
            if(val1 === val2 && val2 === val3) {
                disableButtons();
                displayWin(val1);
            }
        }
    }
};