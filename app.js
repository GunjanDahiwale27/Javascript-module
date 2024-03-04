document.querySelector("#human-score").innerText = localStorage.getItem("YourScore")||0;
document.querySelector("#computer-score").innerText = localStorage.getItem("ComputerScore")||0;

document.querySelector("#stone").addEventListener('click', async()=>{
document.querySelector(".secondcontainer").innerText = "none";
    document.querySelector("#choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./Images/Stone.png";
    const pc=pcpicked();
    const winner=result("scissor", "stone");
    dspyresult(winner);
})
document.querySelector("#paper").addEventListener('click', async()=>{
    document.querySelector("#choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./Images/Paper.png";
    const pc=pcpicked();
    const winner=result(pc, "paper");
    dspyresult(winner);
})
document.querySelector("#scissor").addEventListener('click', async()=>{
    document.querySelector("#choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./Images/Scissor.png";
    const pc=pcpicked();
    const winner=result(pc, "scissor");
    dspyresult(winner);
})
document.querySelector(".playAgain").addEventListener('click',()=>{
    document.querySelector("#choosecontainer").style.display="flex";
    document.querySelector(".displayResult").style.display="none";
    document.querySelector(".secondcontainer").style.display="none";
})

    document.querySelector("#playagainwin").addEventListener('click', ()=>{
    document.querySelector("#choosecontainer").style.display="flex";
    document.querySelector(".firstcontainer").style.display="flex";
    document.querySelector(".secondcontainer").style.display="none";
    // document.querySelector("displayResult").style.display="none";
})


document.querySelector("#rulesButton").addEventListener('click',()=>{
    document.querySelector("#closeButton").style.display="block";
    document.querySelector("#rulesBox").style.display="block";
})
document.querySelector("#closeButton").addEventListener('click',()=>{
    document.querySelector("#closeButton").style.display="none";
    document.querySelector("#rulesBox").style.display="none";    
})

const dspyresult = (winner)=>{
    if(winner=="tie"){
        document.querySelector(".result").innerText="TIE UP";
        document.querySelector(".yourpickimg").classList="yourpickimg tie";
        document.querySelector(".pcpickimg").classList="pcpickimg tie";
        document.querySelector("#nextButton").style.display="none"
        document.querySelector('.secondcontainer').style.display="none";
    }else if(winner=="you"){
        document.querySelector(".result").innerText="YOU WIN";
        document.querySelector(".yourpickimg").classList="yourpickimg win";
        document.querySelector(".pcpickimg").classList="pcpickimg loose";
        let YourScore=localStorage.getItem("YourScore");
        ++YourScore;
        localStorage.setItem("YourScore",YourScore)
        document.querySelector("#human-score").innerText=YourScore;
        document.querySelector("#nextButton").style.display="flex";
    }else if(winner=="pc"){
        document.querySelector(".result").innerText="YOU LOST";
        document.querySelector(".yourpickimg").classList="yourpickimg loose";
        document.querySelector(".pcpickimg").classList="pcpickimg win";
        let pcScore=localStorage.getItem("ComputerScore");
        ++pcScore;
        localStorage.setItem("ComputerScore",pcScore)
        document.querySelector("#computer-score").innerText=pcScore;
        document.querySelector("#nextButton").style.display="none"
        document.querySelector('.secondcontainer').style.display="none";

    }
}
const pcpicked = () =>{
    const pick = random();
    if(pick==0) {
        document.querySelector(".pcpickimg").src="./Images/Stone.png";
        return "stone";
    }
    else if(pick==1) {
        document.querySelector(".pcpickimg").src="./Images/Paper.png";
        return "paper";
    }
    else{
        document.querySelector(".pcpickimg").src="./Images/Scissor.png";
        return "scissor";
    }
}
const result = (pc,you)=>{
    if(pc==you) return "tie";
    else if(pc=="stone" && you=="paper") return "you";
    else if(pc=="stone" && you=="scissor") return "pc";
    else if(pc=="paper" && you=="scissor") return "you";
    else if(pc=="paper" && you=="stone") return "pc";
    else if(pc=="scissor" && you=="stone  ") return "you";
    else if(pc=="scissor" && you=="paper") return "pc";

}
const random = () => {
    return Math.floor(Math.random()*3);
}

document.querySelector("#nextButton").addEventListener('click', ()=>{
    document.querySelector(".firstcontainer").style.display="none";
    document.querySelector(".secondcontainer").style.display="flex";
    document.querySelector("#nextButton").style.display="none";
})