import {gameContainer} from './board'

const app = document.getElementById('app')
app.appendChild(gameContainer)
const playerX = document.querySelector('.x')
const playerO = document.querySelector('.o')
let userSelection = null

const choosePlayerX = () => playerX.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-x')) {
        event.target.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        return
    }
    if (event.target.classList.contains('x-second-arm')) {
        event.target.parentNode.parentNode.classList.add('chosen-player')
        playerO.classList.add('disabled')
        return
    }
    event.target.classList.add('chosen-player')
    playerO.classList.add('disabled')
    console.log('x')
}, { once:true })

const choosePlayerO = () => playerO.addEventListener('click', event => {
    if (event.target.classList.contains('player-container__player-o')) {
        event.target.parentNode.classList.add('chosen-player')
        playerX.classList.add('disabled')
        return
    }
    event.target.classList.add('chosen-player')
    playerX.classList.add('disabled')
    console.log('o')
}, { once:true })


const boardCells = document.querySelectorAll('.game-board__cell')
const cellPick = () => boardCells.forEach(cell => {
    cell.addEventListener('click', event => {
        console.log(event.target)
    })
})

choosePlayerX()
choosePlayerO()
cellPick()
