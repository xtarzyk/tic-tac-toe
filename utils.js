const positionsMap = Array.from({ length:9 })
positionsMap.fill('')
console.log(positionsMap)

const checkBoard = () => positionsMap
    .map((field, index) => field ? null : index)
    .filter(value => value != null)

console.log(checkBoard())

const createCircle = (parent) => {
    const circle = document.createElement('div')
    circle.classList.add('player-container__player-o')
    parent.appendChild(circle)
}

const createCross = (parent) => {
    const cross = document.createElement('div')
    const secondArm = document.createElement('div')
    cross.classList.add('player-container__player-x')
    secondArm.classList.add('x-second-arm')
    cross.appendChild(secondArm)
    parent.appendChild(cross)
}

const createRandom = (array, createShape, positionMap, computerPlayer) => {
    const spareIndexes = checkBoard()
    const randomIndex = spareIndexes[Math.floor(Math.random() * spareIndexes.length)]
    console.log(randomIndex)
    array.forEach((cell, index) => {
        if (index === randomIndex /*&& !array[randomIndex].hasChildNodes()*/) {
            createShape(cell)
            cell.classList.add('disabled')
            positionsMap.splice(index, 1, computerPlayer)
            console.log(checkBoard())
            return
        }
    })
}

export {
    createCircle,
    createCross,
    createRandom,
    positionsMap
}