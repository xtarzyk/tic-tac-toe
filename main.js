import { gameContainer } from './board'
import { createCircle, createCross, createRandom, positionsMap } from './utils'

const app = document.getElementById('app')
app.appendChild(gameContainer)
const playerX = document.querySelector('.x')
const playerO = document.querySelector('.o')
const boardCells = document.querySelectorAll('.game-board__cell')
let userPlayer = ''
let computerPlayer = ''

const choosePlayerX = () => playerX.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-x')) {
        event.target.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        userPlayer = 'x'
        computerPlayer = 'o'
        return
    }
    if (event.target.classList.contains('x-second-arm')) {
        event.target.parentNode.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        userPlayer = 'x'
        computerPlayer = 'o'
        return
    }
    event.target.classList.add('chosen-player')
    playerO.classList.add('disabled')
    userPlayer = 'x'
    computerPlayer = 'o'
}, { once: true })

const choosePlayerO = () => playerO.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-o')) {
        event.target.parentNode.classList.add('chosen-player')
        playerX.classList.add('disabled')
        userPlayer = 'o'
        computerPlayer = 'x'
        return
    }
    event.target.classList.add('chosen-player')
    playerX.classList.add('disabled')
    userPlayer = 'o'
    computerPlayer = 'x'
}, { once: true })

const cellPick = () => boardCells.forEach((cell, index) => {
    cell.addEventListener('click', event => {
        if (userPlayer === 'x') {
            createCross(cell)
            event.target.classList.add('disabled')
            positionsMap.splice(index, 1, userPlayer)
            createRandom(boardCells, createCircle, positionsMap, computerPlayer)
            console.log(positionsMap)
            return
        }
        if (userPlayer === 'o') {
            createCircle(cell)
            event.target.classList.add('disabled')
            positionsMap.splice(index, 1, userPlayer)
            createRandom(boardCells, createCross, positionsMap, computerPlayer)
            console.log(positionsMap)
            return
        }
    })
})

choosePlayerX()
choosePlayerO()
cellPick()
