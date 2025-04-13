const startStopButton = document.getElementById('start-stop')
const resetButton = document.getElementById('reset')
const buttonIcon = document.getElementById('icon')

let sec = document.getElementById('seconds')
let min = document.getElementById('minutes')
let hrs = document.getElementById('hours')

let watch
let running = false;
let secCount = 0
let minCount = 0
let hrsCount = 0

const startStop = () => {

    if (!running) {
        watch = setInterval(() => {
            secCount++
            sec.innerHTML = secCount.toString().padStart(2, '0')
            if (secCount === 60) {
                minCount++
                min.innerHTML = minCount.toString().padStart(2, '0')
                secCount = 0
                sec.innerHTML = secCount.toString().padStart(2, '0')
            } if (minCount === 60) {
                hrsCount++
                hrs.innerHTML = hrsCount.toString().padStart(2, '0')
                minCount = 0
                min.innerHTML = minCount.toString().padStart(2, '0')
            }
        }, 1000);

         startStopButton.innerHTML = ' <i class="fa-solid fa-pause"></i>'
         running = true
    } else {
        clearInterval(watch)
        startStopButton.innerHTML = ' <i class="fa-solid fa-play"></i>'
        running = false
    }
}

const resetWatch = () => {
    secCount = 0
    sec.innerHTML = secCount.toString().padStart(2, '0')
    minCount = 0
    min.innerHTML = minCount.toString().padStart(2, '0')
    hrsCount = 0
    hrs.innerHTML = hrsCount.toString().padStart(2, '0')
}


startStopButton.addEventListener('click', startStop)
resetButton.addEventListener('click', resetWatch)