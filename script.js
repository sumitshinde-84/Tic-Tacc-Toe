let ticTacToe = (function(){


   

    const progressBar = document.getElementsByClassName('progress-bar')[0];
    setInterval(()=>{

        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.style.setProperty('--width', width + .1)
        
    }, 5)
  
    const text = document.querySelector('.text');
    const versus = document.querySelector('.versus')
    const versusButton = document.querySelector('.computer')
    const playBoard = document.querySelector('.playboard')
    const main = document.querySelector('.main')
   
    versusButton.addEventListener('click',()=>{
        versus.style='display:none'
       
        main.style='width:0'
        setTimeout(()=>{
            
            main.style=' position: relative ;width: 100vw;height: 100vh;background-color: var(--Dominant-clr);display: flex;align-items: center;justify-content: center; flex-direction: column;gap: 20px;'
           setTimeout(()=>{
            playBoard.style.display='block'
           },1500)

        },1300)
    })

    window.addEventListener('load',()=>{
        setTimeout(() => {
            text.style.display='none'
            progressBar.style.display='none'
            main.style='width:0'
            setTimeout(()=>{
                
                main.style=' position: relative ;width: 100vw;height: 100vh;background-color: var(--Dominant-clr);display: flex;align-items: center;justify-content: center; flex-direction: column;gap: 20px;'
               setTimeout(()=>{
                versus.style='display:block'
               },1500)

            },1300)
           
            
        }, 6000);

    
    })

// TIC TAC TOE Code starts form hear 

let count =0;
let startGame = function(i){

    const Block = document.querySelector(`.block${i}`);
    if(Block.childElementCount>0){
        return
    }
    const para = document.createElement('p');
    let createPlayer = function(mark){
      
        

        function addMark(){
            para.textContent=mark
          Block.appendChild(para)
          count++;  

         
        }

        return{
            addMark
        }

    }
    player1 = createPlayer('X');
    player2 = createPlayer('O');

   if(count % 2 == 0){
       player1.addMark()
   }else{
       player2.addMark()
   }

}
  

    return{
        startGame
    }    

})()


function hop(i){
    ticTacToe.startGame(i)

}

  