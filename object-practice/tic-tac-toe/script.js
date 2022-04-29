const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();


function TicTacToeGame(){
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function(){
        //whenever something changeds in our div we will take note of that 
        const config = {childList : true}
        //whenever we notice something happened to the div use MutationObeserver , run takeTurn
        const observer = new MutationObserver(() => takeTurn())
        //set oberser on the dom ^ the above code runs a action once we notice something happens to the div > now we have to set the obeserver over the dom to this way its checking for an action

        //We use now run a loop on the boards positions , for each possiton we are going to attact the funtion observer = MutationObserver with the method observe - this method take two agruments the (target and action) the tarrget will be the board.postion from the forEach Loop and we are going to be it true using the config action 
        board.positions.forEach((elemnt) => observer.observe(elemnt, config))
        takeTurn();

    }

    function takeTurn(){
        if(board.checkForWinner()){
            return;
        }

        if(turn % 2 === 0){
            humanPlayer.takeTurn();
            //if turn eqaul 0 then the human player takes a turn 
        } else {
            //if not equal then computer takes turn 
            computerPlayer.takeTurn();
        }

        turn++
        //decide which player turn is 
    }
}

function Board(){
    this.positions = Array.from(document.querySelectorAll('.col'))
   
    

    this.checkForWinner = function(){
        let winner = false;


        const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
     ]

     const positions = this.positions;
     winningCombinations.forEach((winningCombo) => {
       const pos0InnerText = positions[winningCombo[0]].innerText;
       const pos1InnerText = positions[winningCombo[1]].innerText;
       const pos2InnerText = positions[winningCombo[2]].innerText;
       const isWinningCombo = pos0InnerText !== '' &&
         pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
       if (isWinningCombo) {
           winner = true;
           winningCombo.forEach((index) => {
             positions[index].className += ' winner';
           })
       }
     });
 
     return winner;
   }
 }

function HumanPlayer(board){
    this.takeTurn = function(){

        board.positions.forEach(element => element.addEventListener('click',handleTurnTaken))
    }
    function handleTurnTaken(event){
        event.target.innerText = 'X';
        board.positions.forEach(element => element.removeEventListener('click',handleTurnTaken))
    }
    
}


function ComputerPlayer(board){
    this.takeTurn = function(){
        //we create a variable that return the avaible postions using the filter method  
        let availablePositions = board.positions.filter((p) => p.innerText === '');
        const move = Math.floor(Math.random() * (availablePositions.length));
        availablePositions[move].innerText = 'O';
      
    }
    
}