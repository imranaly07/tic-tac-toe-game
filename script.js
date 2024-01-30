let btns=document.querySelectorAll('.grid button');

let winner=document.querySelector('.result')

let output=document.querySelector('.result h3');

let newGame=document.getElementById('newGame');

let reset=document.getElementById('reset');


let checkTurn=document.getElementById('turn');

let turnChecker=document.querySelector('.flex')








let winnerPoints=[


    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let turnO=true;


function disabled(){
    btns.forEach((btn)=>{
        btn.disabled=true;
    })
}


function Enable(){
    btns.forEach((btn)=>{
        btn.disabled=false;
    })
}

newGame.addEventListener('click',function(){
    Enable()

    btns.forEach((btn)=>{
       btn.innerText=''
    })


    winner.classList.add('hide')

    checkTurn.innerText='O Turn'
    turnChecker.style.display='flex'
    


})


reset.addEventListener('click',function(){
    Enable()

    btns.forEach((btn)=>{
       btn.innerText=''
    })


    
    winner.classList.add('hide')
    turnChecker.style.display='flex'
    


});












function showWinner(result){

    winner.classList.remove('hide')

    output.innerText=` congrats ${result}  Won the Game`
    disabled()
    turnChecker.style.display='none'

  
}


btns.forEach((btn)=>{
    btn.addEventListener('click',function () {
     if (turnO) {
        btn.innerText='O'
       checkTurn.innerText='X Turn'

        turnO=false;
        
     }

     else{
        btn.innerText='X'
        checkTurn.innerText='O Turn'


        turnO=true;
     }


    btn.disabled=true;


    checkWinner()


        
    })
})




function checkWinner() {
    for (const winner of winnerPoints) {
        let pos1val = btns[winner[0]].innerText;
        let pos2val = btns[winner[1]].innerText;
        let pos3val = btns[winner[2]].innerText;

        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}







