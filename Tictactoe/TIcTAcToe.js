const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const Winning_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const WinmsgElement = document.getElementById('winningmessage')
const restartButton = document.getElementById('restartbutton')
const WintextmsgElement = document.querySelector('[data-winningmessage-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)


function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true})
    })
    setboardhoverClass()
    WinmsgElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //placemark    
    placeMark(cell, currentClass)

    //check for win
    if (checkWin(currentClass)) {
        endGame(false) 
    }    
    
    //check voor draw 
    else if (isdraw()) {
        endGame(true)
    } else {
    //switch sides
        switchsides()
        setboardhoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        WintextmsgElement.innerText = 'Draw!'
    } else {
        WintextmsgElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    WinmsgElement.classList.add('show')
}

function isdraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function switchsides() {
    circleTurn = !circleTurn
}

function setboardhoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return Winning_combos.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}