// touchstart //клик по экрану
// touchmove //движения пальца по экрану
// touchend //убираем палец
// touchenter // палец зашел на элемент
// touchleave // палец ушел с элемента
// touchcancel // точка соприкосновения не регистрируется внутри браузера

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // }); 
    
    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя ');

    // let reg = /n/ig;

    // // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));
    
    //РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

    // i - не учитывать регистр
    // g - флаг глобальности, все вхождения
    // m

    // \d - все цифры найти
    // \w - все буквы
    // \s - все пробелы

    // \D - ИСКАТЬ НЕ Число
    // \W - искать не букву
    // \S - искать не пробелы   

    // let pass = prompt('введите пароль: ');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ":"));

    // let ans = prompt('Введите число ');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    let str = 'My name is R2D2';

    console.log(str.match(/ /i));
});