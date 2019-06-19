window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a=0) {
            for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } 

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');   
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent();
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer

    let deadline = '2019-06-15';

    function getTimeRemaining(endtime=0) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //дата окончания - тек дата
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(() => {    
            let t = getTimeRemaining(endtime),
            h = t.hours,
            m = t.minutes,
            s = t.seconds;
            if(t.hours <= 9) {
                h = '0' + t.hours;
                };
            hours.textContent = h;
            if (t.minutes <= 9) {
                m = '0' + t.minutes;
                };
            minutes.textContent = m;    
            if (t.seconds <= 9) {
                s = '0' + t.seconds;
                };    
            seconds.textContent = s;    


            if (t.total <= 0) {
                clearInterval(timeInterval=0);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

        },1000);    
    }

    setClock('timer', deadline);

    //modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnDescription = document.querySelectorAll('.description-btn');

        more.addEventListener('click', () => {
            openModalWindow.call(this);
        });

        function openModalWindow() {
            overlay.style.display = 'block';
            //this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';    
        } 

        for (let i = 0; i < btnDescription.length; i++) {
            btnDescription[i].addEventListener('click', () => {
                openModalWindow.call(this);
            });
        }

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });    

        //Form

        let message = {
            loading: 'Загрузка ...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так ...'
        };

        let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

            statusMessage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //определяем что необходимо сделать

            let formData = new FormData(form);
            
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            request.send(json);

            //request.send(formData);

            request.addEventListener('readystatechange', function() {
                if (request.readyState<4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                } 
            });
            
            for (let i = 0; i < input.length; i++) {
                input[i].value ='';
            }

        }); 
        
        let contactForm = document.getElementById('form'),
            inputC = contactForm.getElementsByTagName('input');

        if(contactForm) {
            contactForm.addEventListener('submit', function(event) {
            //event.preventDefault();
            contactForm.appendChild(statusMessage);
            
            let requestC = new XMLHttpRequest();
            requestC.open('POST', 'server.php');
            requestC.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //определяем что необходимо сделать

            let formDataContact = new FormData(contactForm);
            
           
            let objC = {};
            formDataContact.forEach(function(value, key) {
                objC[key] = value;
            });

            let jsonC = JSON.stringify(objC);

            requestC.send(jsonC);

            requestC.addEventListener('readystatechange', function() {
                if (requestC.readyState<4) {
                    statusMessage.innerHTML = message.loading;
                } else if(requestC.readyState === 4 && requestC.status) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                } 
            });
            
            for (let i = 0; i < inputC.length; i++) {
                inputC[i].value ='';
            }

            });
        };
});