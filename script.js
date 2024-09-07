let boxes=document.querySelectorAll(".box");

let reset=document.querySelector("#rbtn");
let newbtn=document.querySelector("#btn");
let msg=document.querySelector(".msg-con");
let para=document.querySelector("#msg");

let turnO=true; //player X    player O

const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame = () =>
{
   turnO=true;
   enablebox();
   msg.classList.add("hide");
};

boxes.forEach((box)=> {
  box.addEventListener("click", ()=>{
    if(turnO){
    //player O
    box.innerText="O";
    turnO=false;
    }
    else {
      //player X
      box.innerText="X";
      turnO=true;
    }
    box.disabled = true;

    checkWinner();
  }
  );
}
); 
const disablebox = () =>
{
  for(let box of boxes)
  {
    box.disabled=true;
  }
};

const enablebox = () =>
{
  for(let box of boxes)
  {
    box.disabled=false;
    box.innerText="";
    document.body.style.background="rgb(18, 23, 63)";
  }
};


const showWinner = (winner) => {
  para.innerText = `You Won! : ${winner}`;
  msg.classList.remove("hide");
  document.body.style.background="slateblue"
  
  disablebox();

};




const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3)
       {
        console.log("Winner", pos1);
        showWinner(pos1);
      } 
      
      }
    }

    
    };

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

