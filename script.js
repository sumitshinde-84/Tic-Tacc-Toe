let ticTacToe = (function(){


    let player1;
    let player2;
    const turnMsg = document.querySelector('#turnMsg');
    const progressBar = document.getElementsByClassName('progress-bar')[0]
    let opponent=[];

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
    const versusButtonComputer = document.querySelector('.computer');
    const playBoard = document.querySelector('.playboard')
    const main = document.querySelector('.main')
   
    versusButtonPlayer.addEventListener('click',()=>{
        versus.style='display:none'
        if(opponent.length>0){
            opponent.pop()
        }
       opponent.push('player')
        main.style='width:0'
        setTimeout(()=>{
            
            main.style=' position: relative ;width: 100vw;height: 100vh;background-color: var(--Dominant-clr);display: flex;align-items: center;justify-content: center; flex-direction: column;gap: 20px;'
           setTimeout(()=>{
            playBoard.style.display='flex'

           },1500)

        },1300)
    })


    versusButtonComputer.addEventListener('click',()=>{
        versus.style='display:none'
        if(opponent.length>0){
            opponent.pop()
        }
       opponent.push('computer')
        main.style='width:0'
        setTimeout(()=>{
            
            main.style=' position: relative ;width: 100vw;height: 100vh;background-color: var(--Dominant-clr);display: flex;align-items: center;justify-content: center; flex-direction: column;gap: 20px;'
           setTimeout(()=>{
            playBoard.style.display='flex'

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
let markCount=0;
let playGroundMark = new Array(9)
playGroundMark = [0,1,2,3,4,5,6,7,8]
let action =[]

let startGame = function(i){
   
    const Block = document.querySelector(`.block${i}`);
    let result='';
    const turnMsg = document.querySelector('#turnMsg');
    
    if( Block ==null|| Block.childElementCount>0 ){
        return
    }
    const PlayGround =document.querySelector('.playground')
    const para = document.createElement('p');
    para.className='markPara'
    let markPara = document.querySelectorAll('.markPara')
    let createPlayer = function(name,mark){
    
        function addMark(){
            
            // if(result==true){
            //     return
            // }else{
            para.textContent=mark
          Block.appendChild(para)
          playGroundMark[i]=mark;
          console.log(playGroundMark)
         
          count++;
            // }
         
        }
  
     
    function Turn(name){
            
        if(name=='computer'){
            turnMsg.textContent=`Wait it's ${name} turn`
        }else{
            turnMsg.textContent=`Now it's your Turn ${name}`
        }
      

        }
    let paraT
    let BLOCK = document.querySelector('.block')
    let Blockbg = document.querySelectorAll('.block')
    let paraForWin = document.createElement('p')
    let replayBtn = document.createElement('button')
    replayBtn.textContent='REPLAY'

        

        replayBtn.addEventListener('click',()=>{
            reset();

        })

    const ReplayIcon = document.querySelector('#replay')
    ReplayIcon.addEventListener('click',()=>{
        reset()
    })
    paraForWin.className='winMsg'
   reset= function(){

        versus.style='display:none'
       
        main.style='width:0px'
        setTimeout(()=>{
            
            main.style=' position: relative ;width: 100vw;height: 100vh;background-color: var(--Dominant-clr);display: flex;align-items: center;justify-content: center; flex-direction: column;gap: 20px;'
           setTimeout(()=>{
            playBoard.style.display='flex'

           },5000)

        },1300)
        setTimeout(()=>{

        for(let i=0;i<9;i++){
    
            Blockbg[i].style='background:#E4F2E7;transform:translate(0,0)'
            PlayGround.style.background='#2D3E40'
            PlayGround.style.boxShadow='5px 5px 5px var(--gray-acccent)'
            PlayGround.style.border='2px var(--Dark-accent) solid'
        
            removeAllChildNodes(Blockbg[i])
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }

            }
            turnMsg.style.display='block';
            Readybtn.style.display='block'
            
            
           
                playGroundMark.shift()
                playGroundMark.push(i)

            
            console.log(playGroundMark)
            result=''
            markCount=0;
            count=0;
            action.pop();
  

        }
       
     

        },1000)




    }
    winAnimation = function(){
        action.push(1)
        setTimeout(()=>{
                

            playerPlate1.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(0,0);opacity:0"
            playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(0,0);opacity:0"
            
            Blockbg[8].removeChild
            
        Blockbg[0].style='background:orange;transform:translate(0,95px)'
        Blockbg[8].style='background:orange;transform:translate(0,-95px)'
        Blockbg[2].style='background:orange;transform:translate(0,95px)'
        Blockbg[6].style='background:orange;transform:translate(0,-95px)'
        Blockbg[1].style='background:orange;transform:translate(0,95px)'
        Blockbg[7].style='background:orange;transform:translate(0,-95px)'
        for(i=0;i<9;i++){

            if(Blockbg[i].childElementCount>0){
                Blockbg[i].querySelector('p').textContent=' '
                }
        }
     
        
        },1000)
        setTimeout(()=>{
            
            Blockbg[2].style='background:orange;transform:translate(-95px,95px)'
            Blockbg[3].style='background:orange;transform:translate(95px,0)'
            Blockbg[5].style='background:orange;transform:translate(-95px,0)'
            Blockbg[8].style='background:orange;transform:translate(-95px,-95px)'
            Blockbg[0].style='background:orange;transform:translate(95px,95px)'
            Blockbg[6].style='background:orange;transform:translate(95px,-95px)'
            PlayGround.style.background='#E4F2E7'
            PlayGround.style.boxShadow='none'
            PlayGround.style.border='none'
            

        },5000)

        setTimeout(()=>{
            
           
            

        Blockbg[8].style='scale:20;background:orange'
        paraForWin.textContent=`YOU WIN ${name}`
        paraForWin.style='font-size:3px; font-family:versusFont;color:#2D3E40;;position:relative; bottom:5px;right:5px'
        replayBtn.style='text-align:bottom;font-size:1px; font-family:versusFont;position:relative; bottom:2px;right:5px; padding:.08em .2em; border:0.01em #2D3E40 solid; font-family: Franklin Gothic Medium;background:#2D3E40;border-radius:.1em;color:orange'
            Blockbg[8].appendChild(paraForWin)
            Blockbg[8].appendChild(replayBtn)

      
           
            

        },6000)
    }

    DrawAnimation=function(){
        action.push(1)
        setTimeout(()=>{
                

            playerPlate1.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(0,0);opacity:0"
            playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(0,0);opacity:0"
            
           
            
        Blockbg[0].style='background:orange;transform:translate(0,95px)'
        Blockbg[8].style='background:orange;transform:translate(0,-95px)'
        Blockbg[2].style='background:orange;transform:translate(0,95px)'
        Blockbg[6].style='background:orange;transform:translate(0,-95px)'
        Blockbg[1].style='background:orange;transform:translate(0,95px)'
        Blockbg[7].style='background:orange;transform:translate(0,-95px)'
        
        
        },1000)
        setTimeout(()=>{
            
            Blockbg[2].style='background:orange;transform:translate(-95px,95px)'
            Blockbg[3].style='background:orange;transform:translate(95px,0)'
            Blockbg[5].style='background:orange;transform:translate(-95px,0)'
            Blockbg[8].style='background:orange;transform:translate(-95px,-95px)'
            Blockbg[0].style='background:orange;transform:translate(95px,95px)'
            Blockbg[6].style='background:orange;transform:translate(95px,-95px)'
            PlayGround.style.background='#E4F2E7'
            PlayGround.style.boxShadow='none'
            PlayGround.style.border='none'
          

        },3000)
        setTimeout(()=>{
            
            Blockbg[0].firstChild.textContent='I'
            Blockbg[1].firstChild.textContent='T'
            Blockbg[2].firstChild.textContent='S'
            Blockbg[3].firstChild.textContent='\''
            Blockbg[4].firstChild.textContent=' '
            Blockbg[5].firstChild.textContent='R'
            Blockbg[6].firstChild.textContent='D'
            Blockbg[7].firstChild.textContent='A'
            Blockbg[8].firstChild.textContent='W'

            Blockbg[0].style='background:orange;transform:translate(-285px,95px)'
            Blockbg[1].style='background:orange;transform:translate(-285px,95px)'
            Blockbg[2].style='background:orange;transform:translate(-190px,95px)'
            Blockbg[3].style='background:orange;transform:translate(-95px,0)'
            Blockbg[4].style='background:orange;transform:translate(0,0)'
            Blockbg[5].style='background:orange;transform:translate(95px,0)'
            Blockbg[6].style='background:orange;transform:translate(190px,-95px)'
            Blockbg[7].style='background:orange;transform:translate(285px,-95px)'
            Blockbg[8].style='background:orange;transform:translate(285px,-95px)'
           
            turnMsg.style.display='none';
            Readybtn.style.display='none'
           

        },4000)

    }

    checkPair  = function(){

            if(playGroundMark[0] === playGroundMark[4] && playGroundMark[4] === playGroundMark[8])
           {
            
            result = true;
            
            Blockbg[0].style='background:orange;'
            Blockbg[4].style='background:orange'
            Blockbg[8].style='background:orange;'

         
          

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
            checkPair,
            winAnimation,
            DrawAnimation
            
           
        }

    }
    player1 = createPlayer('playerI','X');
    player2 = createPlayer('playerII','O');
    computer = createPlayer('computer','O');

    

   if(count % 2 == 0  ){

    playerPlate2.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
    playerPlate1.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1"  
       if(opponent[0]=='computer'){
        player1.Turn('computer')
       }else{

        player1.Turn('player2')
       }
    
       player1.addMark()
       
       result = player1.checkPair()
     
       if(result==true && markCount< 8)
       {
        console.log('player1  win')
        player1.winAnimation()
       }else if(result==false && count>=9){
        player1.DrawAnimation()
       }
    }else if(opponent[0] =='computer' && count % 2 != 0 ) {
    
   
    
    playerPlate1.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;"  
    playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1"  
    computer.Turn('player1')
       computer.addMark()
       
       result = computer.checkPair()
       console.log(result)
       
       if(result==true && markCount< 9)
       {
        console.log('player2  win')
        computer.winAnimation()

       }else if(result==false && count>=9){
         computer.DrawAnimation()
       }

   }else {
    
   
    
    playerPlate1.style="height: 100px;width: 300px;border: 3px orange solid; border-radius: 4px;position: absolute;top:210px; transform: translate(-450px,0);opacity:1;box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;;"  
    playerPlate2.style="height: 100px;width: 300px;border: 3px var(--Dark-accent) solid; border-radius: 4px;position: absolute;top:210px; transform: translate(450px,0);opacity:1"  
    player2.Turn('player1')
       player2.addMark()
       
       result = player2.checkPair()
       console.log(result)
       
       if(result==true && markCount< 9)
       {
        console.log('player2  win')
        player2.winAnimation()

       }else if(result==false && count>=9){
        player2.DrawAnimation()
       }

   }

}
    return{
        startGame,
        playGroundMark,
        action,
        opponent
    }    

})()


// this is function is in global scope

function hop(i){

    let action = ticTacToe.action
    
    console.log(action)
   
    
if(action.length>0){
    return

}else{

ticTacToe.startGame(i) 

let playGroundMark = ticTacToe.playGroundMark
console.log(playGroundMark)

let emptyCell = playGroundMark.filter((item)=>{
    if((typeof(item))=='number'){
        return true

}

})
console.log(ticTacToe.opponent)
if(ticTacToe.opponent[0]=='player'|| emptyCell.length==0 ||action.length>0 ){
    clearTimeout(runCom)
    return
}else{
let randNo = Math.floor(Math.random()*(emptyCell.length - 0))

runCom = setTimeout(()=>{
    
    console.log(emptyCell)
    ticTacToe.startGame(emptyCell[randNo])
}
,2000)
}}



}