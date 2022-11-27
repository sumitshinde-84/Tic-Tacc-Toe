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
      
   

})()