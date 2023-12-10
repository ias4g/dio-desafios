const states = {
  views: {
    squares: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    time: document.getElementById('time'),
    score: document.getElementById('score')
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 20
  },
  actions: {
    timeId: setInterval(randomSquare, 1000),
    countDownTimeId: setInterval(countDown, 1000)
  }
}

function countDown() {
  states.values.currentTime--

  states.views.time.textContent = states.values.currentTime

  if (states.values.currentTime <= 0 || states.values.result < 0) {
    clearInterval(states.actions.timeId)
    clearInterval(states.actions.countDownTimeId)
    states.views.time.textContent = 0
    states.views.score.textContent = 0
    alert('Game Over! O seu resultado foi: ' + states.values.result)
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`)
  audio.volume = 0.2
  audio.play()
}

function randomSquare() {
  states.views.squares.forEach((square) => {
    square.classList.remove('enemy')
  })

  let index = Math.floor(Math.random() * 9)
  let randomSquare = states.views.squares[index]

  randomSquare.classList.add('enemy')
  states.values.hitPosition = randomSquare.id
}

function addListenerHitBox() {
  states.views.squares.forEach((square) => {
    square.addEventListener('click', () => {
      if (square.id === states.values.hitPosition) {
        states.values.result++
        states.views.score.textContent = states.values.result
        states.values.hitPosition = null
        playSound('hit')
      } else {
        states.values.result -= 2
        states.views.score.textContent = states.values.result
        states.values.hitPosition = null
      }
    })
  })
}

function initialize() {
  addListenerHitBox()
}

initialize()