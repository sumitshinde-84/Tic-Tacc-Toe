let ticTacToe = (function(){


   
    const turnMsg = document.querySelector('#turnMsg');
    const progressBar = document.getElementsByClassName('progress-bar')[0]

    setInterval(()=>{

        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.style.setProperty('--width', width + .1)
        
    }, 5)


    const playerPlate1 = document.querySelector('.plate1');
    const playerPlate2 = document.querySelector('.plate2');
    const Readybtn = document.querySelector('#ready')

    Readybtn.addEventListener('click',()=>{
        
        playerPlate1.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1"
        playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1"
        setTimeout(()=>{
            turnMsg.textContent='Now it\'s your turn player1 '
            playerPlate1.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
   
        },1000)
    })
  
    const text = document.querySelector('.text');
    const versus = document.querySelector('.versus')
    const versusButtonPlayer = document.querySelector('.player')
    const playBoard = document.querySelector('.playboard')
    const main = document.querySelector('.main')
   
    versusButtonPlayer.addEventListener('click',()=>{
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
let playGroundMark = new Array(9)
playGroundMark = [0,1,2,3,4,5,6,7,8]

let startGame = function(i){
   
    const Block = document.querySelector(`.block${i}`);
    const turnMsg = document.querySelector('#turnMsg');

    if(Block.childElementCount>0){
        return
    }

    const para = document.createElement('p');
    let createPlayer = function(mark){
    
        function addMark(){
            
            para.textContent=mark
          Block.appendChild(para)
          playGroundMark[i]=mark;
          console.log(playGroundMark)
         
          count++; 
         
        }
    let result = false;
     
    function Turn(name){
            
        turnMsg.textContent=`Now it's your Turn ${name}`

        }
    let Blockbg = document.querySelectorAll('.block')

    checkPair  = function(){

            if(playGroundMark[0] === playGroundMark[4] && playGroundMark[4] === playGroundMark[8])
           {
            
            result = true;

            Blockbg[0].style.background='orange'
            Blockbg[4].style.background='orange'
            Blockbg[8].style.background='orange'



           }else if(playGroundMark[2] === playGroundMark[4] && playGroundMark[4] === playGroundMark[6])
           {
            
           
            result = true;
            Blockbg[2].style.background='orange'
            Blockbg[4].style.background='orange'
            Blockbg[6].style.background='orange'

           }else if(playGroundMark[0] === playGroundMark[3] && playGroundMark[3] === playGroundMark[6])
          {
            result = true;
            Blockbg[0].style.background='orange'
            Blockbg[3].style.background='orange'
            Blockbg[6].style.background='orange'

           }else if(playGroundMark[1] === playGroundMark[4] && playGroundMark[4] === playGroundMark[7])
           {
            result = true;
            Blockbg[1].style.background='orange'
            Blockbg[4].style.background='orange'
            Blockbg[7].style.background='orange'

            }else if(playGroundMark[2] === playGroundMark[5] && playGroundMark[5] === playGroundMark[8])
           {
            result = true;
            Blockbg[2].style.background='orange'
            Blockbg[5].style.background='orange'
            Blockbg[8].style.background='orange'

           }else if(playGroundMark[0] === playGroundMark[1] && playGroundMark[1] === playGroundMark[2])
           {
            result =true
            Blockbg[0].style.background='orange'
            Blockbg[1].style.background='orange'
            Blockbg[2].style.background='orange'

            }else if(playGroundMark[3] === playGroundMark[4] && playGroundMark[4] === playGroundMark[5])
          {
            result =true
            Blockbg[3].style.background='orange'
            Blockbg[4].style.background='orange'
            Blockbg[5].style.background='orange'

          } else if(playGroundMark[6] === playGroundMark[7] && playGroundMark[7] === playGroundMark[8])
          {
            result= true;
            Blockbg[6].style.background='orange'
            Blockbg[7].style.background='orange'
            Blockbg[8].style.background='orange'

           }else{

            result = false
        }
      return result
    }


        
          return{
            addMark,
            Turn,
            checkPair
           
        }

    }
    player1 = createPlayer('X');
    player2 = createPlayer('O');

    

   if(count % 2 == 0){
    playerPlate2.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
    playerPlate1.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1"  
        player1.Turn('player2')
       player1.addMark()
       result = player1.checkPair()
       if(result==true)
       {
        console.log('player1  win')
       }
       
       
   }else{
    
   
    
    playerPlate1.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;"  
    playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1"  
    player2.Turn('player1')
       player2.addMark()
       result = player2.checkPair()
       console.log(result)
       if(result==true)
       {
        console.log('player2  win')
       }

   }

}
    return{
        startGame,   
    }    

})()


// this is function is in global scope

function hop(i){
    ticTacToe.startGame(i)

}

