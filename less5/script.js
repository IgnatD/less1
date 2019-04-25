let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    //heart = document.querySelectorAll('.wrapper .heart');
    oneHeart = document.querySelector('.heart'), //первое значение
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';    
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был Дима!');

div.classList.add('black');

//document.body.appendChild(div);
//wrapper.appendChild(div);

//div.innerHTML = '<h1>Hi Dima</h1>';
div.textContent = 'Hi dim';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[2]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);