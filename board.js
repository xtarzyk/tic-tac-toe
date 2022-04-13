const gameContainer = document.createElement('div')
const playerSelection = document.createElement('div')
const containerX = document.createElement('div')
const containerO = document.createElement('div')
const playerX = document.createElement('div')
const xSecondArm = document.createElement('div')
const playerY = document.createElement('div')
const gameBoard = document.createElement('div')
const boardArray = Array.from({ length: 9 })
const boardCell = document.createElement('div')

const createGameBoard = () => {
    gameContainer.classList.add('game')
    playerSelection.classList.add('game__player-selection')
    containerX.classList.add('player-selection__player-container')
    containerX.classList.add('x')
    containerO.classList.add('player-selection__player-container')
    containerO.classList.add('o')
    playerX.classList.add('player-container__player-x')
    xSecondArm.classList.add('x-second-arm')
    playerY.classList.add('player-container__player-o')
    gameBoard.classList.add('game__game-board')
    boardCell.classList.add('game-board__cell')

    gameContainer.appendChild(playerSelection)
    playerSelection.appendChild(containerX)
    playerSelection.appendChild(containerO)
    containerX.appendChild(playerX)
    containerO.appendChild(playerY)
    playerX.appendChild(xSecondArm)
    gameContainer.appendChild(gameBoard)
}

const prepareBoard = () => boardArray.fill(boardCell)

const createCells = () => {
    const cellsNodes = boardArray.map(() => boardCell.cloneNode(true))

    cellsNodes.forEach(cellNode => gameBoard.appendChild(cellNode))

    return cellsNodes
}

createGameBoard()
prepareBoard()
createCells()

export { gameContainer }