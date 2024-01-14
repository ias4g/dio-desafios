const pathImages = './src/assets/icons/'
const states = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById('score_points')
  },
  cardsSprites: {
    avatar: document.getElementById('card-image'),
    name: document.getElementById('card-name'),
    type: document.getElementById('card-type'),
  },
  fieldsCarda: {
    player: document.getElementById('player-field-card'),
    computer: document.getElementById('computer-field-card'),
  },
  playerSides: {
    player1: 'player-cards',
    player1Box: document.getElementById('player-cards'),
    computer: 'computer-cards',
    computerBox: document.getElementById('computer-cards')
  },
  button: document.getElementById('next-duel')
}
const cardData = [
  { id: 0, name: 'Blue Eyes White Dragon', type: 'Paper', img: `${pathImages}dragon.png`, winOf: [1], loseOf: [2] },
  { id: 1, name: 'Dark Magician', type: 'Rock', img: `${pathImages}magician.png`, winOf: [2], loseOf: [0] },
  { id: 2, name: 'Exodia', type: 'Scissors', img: `${pathImages}exodia.png`, winOf: [0], loseOf: [1] }
]


async function getRandomCardId() {
  const randomIndex = Math.floor(Math.random() * cardData.length)
  return cardData[randomIndex].id
}

async function drawSelectedCard(index) {
  states.cardsSprites.avatar.src = cardData[index].img
  states.cardsSprites.name.innerText = cardData[index].name
  states.cardsSprites.type.innerText = `Attribute: ${cardData[index].type}`
}

async function remveAllCardsImages() {
  let { player1Box, computerBox } = states.playerSides

  let imgElements = player1Box.querySelectorAll('img')
  imgElements.forEach((img) => img.remove())

  imgElements = computerBox.querySelectorAll('img')
  imgElements.forEach((img) => img.remove())
}

async function playAudio(status) {
  const audio = new Audio(`./src/assets/audios/${status}.wav`)
  audio.play()
}

async function checkDuelResults(playerCardId, computerCardId) {
  let duelResults = 'Draw'
  let playerCard = cardData[playerCardId]

  if (playerCard.winOf.includes(computerCardId)) {
    duelResults = 'Win'
    states.score.playerScore++
  }

  if (playerCard.loseOf.includes(computerCardId)) {
    duelResults = 'Lose'
    states.score.computerScore++
  }

  await playAudio(duelResults)
  return duelResults
}

async function updateScore() {
  states.score.scoreBox.innerText = `Player ${states.score.playerScore} x ${states.score.computerScore} Computer`
}

async function drawButton(text) {
  states.button.innerText = text.toUpperCase()
  states.button.style.display = 'block'
}

async function setCardsField(cardId) {
  await remveAllCardsImages()

  let computerCardId = await getRandomCardId()

  states.fieldsCarda.player.style.display = 'block'
  states.fieldsCarda.computer.style.display = 'block'

  states.fieldsCarda.player.src = cardData[cardId].img
  states.fieldsCarda.computer.src = cardData[computerCardId].img

  let duelResults = await checkDuelResults(cardId, computerCardId)

  await updateScore()
  await drawButton(duelResults)
}

async function createCardImage(idCard, fieldSide) {
  const cardImage = document.createElement('img')

  cardImage.setAttribute('height', '100px')
  cardImage.setAttribute('data-id', idCard)
  cardImage.setAttribute('src', `${pathImages}card-back.png`)

  if (fieldSide === states.playerSides.player1) {
    cardImage.classList.add('card')

    cardImage.addEventListener('mouseover', () => {
      drawSelectedCard(idCard)
    })

    cardImage.addEventListener('click', () => {
      setCardsField(cardImage.getAttribute('data-id'))
    })
  }

  return cardImage
}

async function drawCards(cardNumbers, fieldSide) {
  for (let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId()
    const cardImage = await createCardImage(randomIdCard, fieldSide)

    document.getElementById(fieldSide).appendChild(cardImage)
  }
}

async function hiddenCardsDetails() {
  states.fieldsCarda.player.src = `${pathImages}card-back.png`
  states.fieldsCarda.computer.src = `${pathImages}card-back.png`
  states.cardsSprites.avatar.src = `${pathImages}card-back.png`
}

function resetDuel() {
  states.button.style.display = 'none'

  states.fieldsCarda.player.src = `${pathImages}card-back.png`
  states.fieldsCarda.computer.src = `${pathImages}card-back.png`

  states.cardsSprites.avatar.src = `${pathImages}card-back.png`

  states.cardsSprites.name.innerText = 'Passe o mouse'
  states.cardsSprites.type.innerText = 'sobre uma carta'

  init()
}

function init() {
  drawCards(5, states.playerSides.player1)
  drawCards(5, states.playerSides.computer)
  hiddenCardsDetails()
}

init()