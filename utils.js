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

export { createCircle, createCross }