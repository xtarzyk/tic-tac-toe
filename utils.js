import { gameContainer } from './board'

const positionsMap = Array.from({length: 9})
positionsMap.fill('')

const checkBoard = () => positionsMap
    .map((field, index) => field ? null : index)
    .filter(value => value != null)

const checkWin = player => {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    const checkPositions = positionsMap.reduce((acc, field, index) => {
        if (field.includes(player)) {
            return acc.concat(index)
        }
        return acc
    }, [])
    const checkConditions = winConditions.find(arr => arr.every(trio => checkPositions.includes(trio)))
    if (checkConditions) {
        alert(`${player} wins`)
        window.location.reload()
    }
    if (!positionsMap.includes('')) {
        alert('Draw!')
        window.location.reload()
    }
}

const createCircle = parent => {
    const circle = document.createElement('div')
    circle.classList.add('player-container__player-o')
    parent.appendChild(circle)
}

const createCross = parent => {
    const cross = document.createElement('div')
    const secondArm = document.createElement('div')
    cross.classList.add('player-container__player-x')
    secondArm.classList.add('x-second-arm')
    cross.appendChild(secondArm)
    parent.appendChild(cross)
}

const createRandom = (array, createShape, positionMap, computerPlayer) => {
    setTimeout(() => {
        const spareIndexes = checkBoard()
        const randomIndex = spareIndexes[Math.floor(Math.random() * spareIndexes.length)]
        array.forEach((cell, index) => {
            if (index === randomIndex) {
                createShape(cell)
                cell.classList.add('disabled')
                positionsMap.splice(index, 1, computerPlayer)
            }
        })
        gameContainer.classList.remove('disabled')
    }, 1000)
}

export {
    createCircle,
    createCross,
    createRandom,
    checkWin,
    positionsMap
}