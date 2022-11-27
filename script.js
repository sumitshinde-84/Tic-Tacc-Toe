let ticTacToe = (function(){


   

    const progressBar = document.getElementsByClassName('progress-bar')[0];
    setInterval(()=>{

        const computedStyle = getComputedStyle(progressBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        progressBar.style.setProperty('--width', width + .1)
        
    }, 5)
  
    const text = document.querySelector('.text');
    const versus = document.querySelector('.versus')

    window.addEventListener('load',()=>{
        setTimeout(() => {
            text.style.display='none'
            progressBar.style.display='none'
            versus.style='display:block'
           
            
        }, 6000);

       
      
    })

})()