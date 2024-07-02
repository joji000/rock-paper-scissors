function getComputerChoice(){
    const computerchoice = ["rock" ,"paper" ,"scissors"]
    return(computerchoice[Math.floor(Math.random() * 3)])
}

function getHumanChoice(){
    let x = true
    while (x){
        let humanchoice = prompt("input your choice. 1.rock 2.paper 3.scissors")
        humanchoice = humanchoice.toLowerCase()
        if (
            humanchoice !== "rock" &&
            humanchoice !== "paper" &&
            humanchoice !== "scissors"
        ) {
            alert("You must pick rock paper or scissors!");
        }else { 
            x = false
            return humanchoice   
        }
    }
}

let Humanscore = 0
let computerscore = 0

function playRound(humanchoice,computerchoice){
    if(humanchoice === "rock" && computerchoice === "scissors" || humanchoice === "paper" && computerchoice === "rock" || humanchoice === "scissors" && computerchoice === "paper")
    {
        console.log("Human won")
        return Humanscore +=1
    }else if (humanchoice === "rock" && computerchoice === "paper" || humanchoice === "paper" && computerchoice === "scissors" || humanchoice === "scissors" && computerchoice === "rock")
    {
        console.log("Computer won")
        return computerscore += 1
    }else{
        return console.log("Draw")
    }
}
     

function playGame(){
    
    for(i=1;i<=5;i++){
        const humanchoice = getHumanChoice()
        const computerchoice = getComputerChoice()
        console.log("Round : ",i)
        console.log("Human is Select : ",humanchoice)
        console.log("Computer is Select : ",computerchoice)
        playRound(humanchoice,computerchoice)
        console.log("HumanScore is : ",Humanscore)
        console.log("ComputerScore is : ",computerscore)
        console.log("-------------------------------------")  
    }
    if(computerscore > Humanscore){
        console.log("Computer is The winner!!!")
    }else if(computerscore < Humanscore){
        console.log("Human is The winner!!!")
    }else{
        console.log("Draw!!!")
    }
}

playGame()

