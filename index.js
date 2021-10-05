var scorePlayer = 0
var scoreAI = 0
var scorePlayerT = scorePlayer.toString()
var scoreAIT = scoreAI.toString()
var turn = 0
document.getElementById("splayer").innerHTML=scorePlayer
document.getElementById("sai").innerHTML=scoreAI

function Rock(){

    imgPlayer.setAttribute("src","https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
    
    var pick = [0,1,2]
    var random = pick[Math.floor(Math.random()*pick.length)]

    switch (random){
        case 0 :
            imgAI.setAttribute("src","https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
            console.log("tie")
            break;
        case 1 : 
            imgAI.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
            console.log("You loose")
             scoreAI = scoreAI + 1 
             turn = turn +1 
             document.getElementById("sai").innerHTML=scoreAI

            break;
        case 2 : 
            imgAI.setAttribute("src","https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
            console.log("You win !")
             scorePlayer = scorePlayer + 1
             turn = turn +1 
             document.getElementById("splayer").innerHTML=scorePlayer

             console.log
    }
    
 
    if (turn === 5 && scorePlayer > scoreAI){ 
    window.alert("You win baby ! ")
    } else if ( turn === 5 && scoreAI > scorePlayer){
    window.alert("Sorry looser ...")
    } 

}

function Paper(){
    imgPlayer.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
    
    var pick = [0,1,2]
    var random = pick[Math.floor(Math.random()*pick.length)]

    switch (random){
        case 0 :
            imgAI.setAttribute("src","https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
            console.log("You win !")
             scorePlayer = scorePlayer + 1
             turn = turn +1
             document.getElementById("splayer").innerHTML=scorePlayer 
            break;
        case 1 : 
            imgAI.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
            console.log("tie")

            break;
        case 2 : 
            imgAI.setAttribute("src","https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
            console.log("You loose")
             scorePlayer = scoreAI + 1
             turn = turn +1
             document.getElementById("sai").innerHTML=scoreAI

    }
    
    
     if (turn === 5 && scorePlayer > scoreAI){
        console.log("You win")
        window.alert("You win baby ! ")

    } else if (turn === 5 && scoreAI > scorePlayer){
        console.log("You loose")
        window.alert("Sorry looser ...")

    } 
    
    

}

function Scissor(){
    imgPlayer.setAttribute("src","https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
    
    var pick = [0,1,2]
    var random = pick[Math.floor(Math.random()*pick.length)]

    switch (random){
        case 0 :
            imgAI.setAttribute("src","https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg")
            console.log("You loose")
             scoreAI = scoreAI + 1 
             turn = turn +1
             document.getElementById("sai").innerHTML=scoreAI

            break;
        case 1 : 
            imgAI.setAttribute("src","https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
            console.log("You win !")
             scorePlayer = scorePlayer + 1 
             turn = turn +1
             document.getElementById("splayer").innerHTML=scorePlayer
            break;
        case 2 : 
            imgAI.setAttribute("src","https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
            console.log("tie")
            break;
    }
     
    if (turn === 5 && scorePlayer > scoreAI){
        console.log("You win")
        window.alert("You win baby ! ")

    } else if (turn === 5 && scoreAI > scorePlayer){
        console.log("You loose")
        window.alert("Sorry looser ...")

    }
  

}
