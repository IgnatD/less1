'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('Li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.column .adv'),
    prompt_q = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
menuItemLi.classList.add('menu-item'); //создание элемента 
menuItemLi.textContent = 'Пятый элемент'; // присвоение текста
menu.appendChild(menuItemLi); //добавление созданного элемент на страницу

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // backgroundImage - фон, "url()" - адрес картинки обязательно в ковычках

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answerMyQuestion = prompt("Ваше отношение к технике Apple?");
prompt_q.textContent = answerMyQuestion;

