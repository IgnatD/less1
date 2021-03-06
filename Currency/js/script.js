
let inputByr = document.getElementById('byr'),
    inputUsd = document.getElementById('usd');

    inputByr.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve,reject){ 
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
    
            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response)
                    }
                    else {
                        reject();
                    }
                }
            }
        });
    };
    
    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputByr.value / data.usd;
    })    
    .then(() => console.log(3000))
    .catch(() => inputUsd.value = "Что-то пошло не так!")
});