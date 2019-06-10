let age = document.getElementById('age'),
    btn = document.getElementById('btnAge');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

btn.addEventListener('click', function() {
    showUser.apply(age, ["Игнатенко","Дмитрий"]);
});