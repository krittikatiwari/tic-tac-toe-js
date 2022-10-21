let buttonOpt = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newGame = document.getElementById("new-game");
let restart = document.getElementById("restart");
let mssg = document.getElementById("message");
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;


const disableButtons = () => {
  buttonOpt.forEach((element) => (element.disabled = true));
  
  popup.classList.remove("hide");
};


const enableButtons = () => {
  buttonOpt.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  
  popup.classList.add("hide");
};


const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    mssg.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    mssg.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};


const drawFunction = () => {
  disableButtons();
  mssg.innerHTML = "&#x1F60E; <br> It's a Draw";
};


newGame.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restart.addEventListener("click", () => {
  count = 0;
  enableButtons();
});


const winChecker = () => {
  
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      buttonOpt[i[0]].innerText,
      buttonOpt[i[1]].innerText,
      buttonOpt[i[2]].innerText,
    ];
    
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        
        winFunction(element1);
      }
    }
  }
};


buttonOpt.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      
      element.innerText = "O";
      element.disabled = true;
    }
    
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    
    winChecker();
  });
});

window.onload = enableButtons;