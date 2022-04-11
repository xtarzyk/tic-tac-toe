import {gameContainer} from './board'
import {createCircle, createCross} from './utils'

const app = document.getElementById('app')
app.appendChild(gameContainer)
const playerX = document.querySelector('.x')
const playerO = document.querySelector('.o')
let userSelection = null

const choosePlayerX = () => playerX.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-x')) {
        event.target.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        userSelection = 'x'
        return
    }
    if (event.target.classList.contains('x-second-arm')) {
        event.target.parentNode.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        userSelection = 'x'
        return
    }
    event.target.classList.add('chosen-player')
    playerO.classList.add('disabled')
    userSelection = 'x'
}, {once: true})

const choosePlayerO = () => playerO.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-o')) {
        event.target.parentNode.classList.add('chosen-player')
        playerX.classList.add('disabled')
        userSelection = 'o'
        return
    }
    event.target.classList.add('chosen-player')
    playerX.classList.add('disabled')
    userSelection = 'o'
}, {once: true})


const boardCells = document.querySelectorAll('.game-board__cell')
const randomIndex = Math.floor(Math.random() * boardCells.length)
const cellPick = () => boardCells.forEach((cell, index) => {
    cell.addEventListener('click', event => {
        if (userSelection === 'x') {
            createCross(cell)
            event.target.classList.add('disabled')
            return
        }
        if (userSelection === 'o') {
            createCircle(cell)
            event.target.classList.add('disabled')
            createRandom()
            return
        }
    })
})

function createRandom() {
    boardCells.forEach((cell, index) => {
        if (boardCells[randomIndex].hasChildNodes()) {
            console.log('fire')
            createCircle(cell)
        }
    })
}

choosePlayerX()
choosePlayerO()
cellPick()
