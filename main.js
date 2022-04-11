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
const cellPick = () => boardCells.forEach(cell => {
    cell.addEventListener('click', event => {
        if (userSelection === 'x') {
            createCross(cell)
            event.target.classList.add('disabled')
            createRandom(boardCells, createCircle)
            return
        }
        if (userSelection === 'o') {
            createCircle(cell)
            event.target.classList.add('disabled')
            createRandom(boardCells, createCross)
            return
        }
    })
})

const checkBoard = (array) => {

}

const createRandom = (array, createShape) => {
    const randomIndex = () => Math.floor(Math.random() * boardCells.length)
    let newRandom = randomIndex()
    array.forEach((cell, index) => {
        if (index === newRandom && !array[newRandom].hasChildNodes()) {
            createShape(cell)
            cell.classList.add('disabled')
            return
        }

    })
}

choosePlayerX()
choosePlayerO()
cellPick()
