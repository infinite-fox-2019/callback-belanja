let heights = [3, 4]

let mountHeights = []
heights.forEach(height => {
    let eachHeight = 0
    for (let i = 0; i < height * 2 - 1; i++) {
        mountHeights.push(eachHeight)
        i < height - 1 ? eachHeight++ : eachHeight--
    }
})

let boards = []
for (let i = 0; i < mountHeights.length; i++) {
    boards.push([])
    for (let j = 0; j < 12; j++) {
        if (mountHeights[j] === i) {
            boards[i][j] = 'G'
        } else {
            boards[i][j] = ' '
        }
    }
}

console.log(boards.reverse().map(eachBoards => eachBoards.join('')).join('\n'));