


let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
counter = 0;
msCounter = 0;
msHundredsCount = 0;
offSet = 0;
msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
secondTens.innerHTML = 0;
secondOnes.innerHTML = 0;
let timer = setInterval(function() {
    // if(counter < 10){
    //     for (let i = 0; i < 1; i++){
    //         secondOnes.innerHTML = counter;
    //         counter++;
    //     }
    // }else if (counter === 10){
    //     secondOnes.innerHTML = 0;
    //     secondTens.innerHTML = 1;
    // }  
    if(msCounter <= 100){
        for (let i = 0; i < 1; i++){
            msHundreds.innerHTML = msCounter;
            msCounter++;
        }
    }
    if (msCounter === 100){
        msCounter = 0;
        msTens.textContent = 0;
        msHundredsCount++;
        secondOnes.textContent = msHundredsCount;
        if(msHundredsCount === 10){
            clearInterval(timer);
            msHundreds.innerHTML = 0;
            secondOnes.textContent = 0;
            secondTens.textContent = 1;
        }    
    }

}, 10);



    

// setInterval(function() {
//     if(counter < 10){
//         for (let i = 0; i < 1; i++){
//             msTens.innerHTML = counter;
//             counter++;
//         }
//     }
// }, 100);

