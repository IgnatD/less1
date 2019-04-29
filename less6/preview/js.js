let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');
// btn[0].onclick = function() {
//     alert('Вы нажали первую кнопку');
// }

// btn[0].onclick = function() {
//     alert('Вы опять нажали первую кнопку.');
// }

// btn[0].addEventListener('click', function(event){
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';
//     console.log('Произошло 1 событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло 2 событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло 2 событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log("Вышли");
    });
});

// btn[0].addEventListener('mouseenter', function(){
//     alert('Вы навели на первую кнопку');
// });

