let drink = 0;

function shoot(arrow) {
    
    console.log('Вы сделали выстрел...');
    
    let promis = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000)
    })

    return promis;

};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? bayBeer() : giveMoney();
}

function loose() {
    console.log('Вы проиграли!');
}

function bayBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили');
}

shoot({})
        .then(mark => console.log('Мы попали в цель'))
        .then(win)
        .catch(loose)