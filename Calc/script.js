let inputByr = document.getElementById('byr'),
    inputUsd = document.getElementById('usd');

inputByr.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //создание нового объекта

    //request.open(method, url, async, login, pass);
     request.open('GET', 'current.json'); //настройки
     request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //определяем что необходимо сделать
     request.send(); //запускает запрос


    //status - код ответа
    //statusText - текстовый ответ сервера
    //responseText / response - содержит текст ответа сервера
    //readyState - состояние запроса

    request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);

        inputUsd.value = inputByr.value / data.usd;
    } else {
        inputUsd.value = "Ошибка";
    }
});

});  