


let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
counter = 0;
setInterval(function() {
    for (let i = 0; i < 10; i++){
        counter += 1;
        msHundreds.innerHTML = "0";
    }
    msTens.innerHTML = counter;
}, 1000);

