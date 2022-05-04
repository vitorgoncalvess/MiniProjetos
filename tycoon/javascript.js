cont = 0
click = document.getElementById('Clicker').addEventListener('click', addClick)
    function addClick() {
        cont++
        contador.innerHTML = `${cont}`
    }
