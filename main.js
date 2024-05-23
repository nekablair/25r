let btn = document.getElementById("timerBtn")
let countdownBlock = document.getElementById("timerBlock")
let timer
let initialTime = 25 * 60
let pomodoroTime = initialTime 
let isRunning = false
let box = document.getElementById("box")

function updateDisplay (seconds){
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    countdownBlock.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

//function to establish pomodoroTime in 25 minutes worth of seconds=1500 seconds
function countdown () {
    if(pomodoroTime <= 0){
            clearTimeout(timer)
            btn.innerHTML = "START"
            isRunning = false
            alert("Time's Up!")
            return
    }
    updateDisplay(pomodoroTime)
    pomodoroTime--

    timer = setTimeout(countdown, 1000)
        // setTimeout(() => {
        //     countdown(seconds - 1)
        // }, 1000) //delay of 1 second
    
    // countdown(pomodoroTime)
}


function startTime () {
    if(!isRunning){
        isRunning = true
        countdown()
    }
}

function stopTime () {
    clearTimeout(timer)
    isRunning = false
    pomodoroTime = initialTime
    updateDisplay(pomodoroTime)
}


btn.addEventListener("click", () => {
    if (btn.innerHTML === "START"){
        startTime()
        btn.innerHTML = "RESET"
        btn.style.background = "#fababa"
        
    } else if(btn.innerHTML === "RESET") {
        stopTime()
        btn.innerHTML = "START"
        btn.style.background = "#ddfaaf"
        
    }
})

updateDisplay(pomodoroTime)