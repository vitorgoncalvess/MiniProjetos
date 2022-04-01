segundo = 31
    x = 0
    hitVezes = 0
    hitAcertado = 0
    hitErrado = 0
    porcentagemAcerto = 0
    streak = 1
    pontos = 0
    pontosX = 0
    timerDemoro = 0
    function startGame() {
        botao.style.display = 'none'
        hit.style.display = 'block'
        tempo.style.display = 'block'
        porcent.style.display = 'block'
        randomIX = Math.floor(Math.random() * (1000 - 200)) + 200
        randomIY = Math.floor(Math.random() * (450 - 50)) + 50
        hit.style.marginLeft = `${randomIX}px`
        hit.style.marginTop = `${randomIY}px`
        timer()
        demoroInicial()
    }
    function timer() {
        segundo--
        if (segundo >= 10) {
            tempo.innerHTML = `0:${segundo}`
        } else {
            tempo.innerHTML = `0:0${segundo}`
        }
        setTimeout(timerStop, 1000)

    }
    function timerStop() {
        if (segundo > 0) {
            timer()
        } else {
            console.log('acabou')
            hit.style.display = 'none'
            tempo.style.display = 'none'
            gameOver.style.display = 'block'
        }
    }
    function randomX() {
        randomPX = Math.floor(Math.random() * (1000 - 200)) + 200
        hit.style.marginLeft = `${randomPX}px`
        hitVezes ++
        console.log('x:' +randomPX)
    }
    function randomY() {
        randomPY = Math.floor(Math.random() * (450 - 50)) + 50
        hit.style.marginTop = `${randomPY}px`
        console.log('y:'+randomPY)

    }
    function botaoHitOver() {
        x++
        console.log(x)
    }
    function botaoHitOut() {
        x--
        console.log(x)
    }
    function botaoHit() {
        if (x == 1) {
            console.log('hit acerto')
        } else {
            console.log('hit errou')
        }
    }
    document.getElementById('corpo').addEventListener('keypress', function botaoEntrar(e) {
    if (e.key == 'z') {
        if (x == 1) {
            randomX()
            randomY()
            timerDemoro = 0
            pontos += 50
            streak++
            hitAcertado++
            pontosX += pontos * streak
            porcentagemAcerto = ((hitAcertado / hitVezes) * 100)
            porcent.innerHTML = `${porcentagemAcerto.toFixed(2)}% <br><br>
            ${pontosX}<br>
            ${streak}x`
        } else {
            randomX()
            randomY()
            timerDemoro = 0
            hitErrado++
            streak = 1
            pontos = 0
            porcentagemAcerto = ((hitAcertado / hitVezes) * 100)
            porcent.innerHTML = `${porcentagemAcerto.toFixed(2)}% <br><br>
            ${pontosX}<br>
            ${streak}x`
        }
    }
})
    function demoroInicial() {
        timerDemoro++
        demoroTrocar()
    }
    function demoroTrocar() {
        if (timerDemoro < 2) {
            setTimeout(demoroInicial, 1000)
        } else {
            randomX()
            randomY()
            timerDemoro = 0
            demoroInicial()
        }
    }