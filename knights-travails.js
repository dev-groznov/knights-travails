function getAllMoves(cell) {
    const allMoves = [[cell[0] - 2, cell[1] - 1],
        [cell[0] - 2, cell[1] + 1],
        [cell[0] - 1, cell[1] - 2],
        [cell[0] - 1, cell[1] + 2],
        [cell[0] + 1, cell[1] - 2],
        [cell[0] + 1, cell[1] + 2],
        [cell[0] + 2, cell[1] - 1],
        [cell[0] + 2, cell[1] + 1]
    ]
    
    const checkedAllMoves = []

    for(let move of allMoves) {
        if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7) {
            checkedAllMoves.push(move)
        }
    }

    return checkedAllMoves
}

function getPath(start, goal, map) {
    let res = [goal]
    let cur = goal

    while(cur[0] !== start[0] || cur[1] !== start[1]) {
        cur = map.get(`${cur[0]},${cur[1]}`)
        if (cur === null) break
        res = [cur, ...res]
    }
    return res
}

function knightMoves(start, goal) {
    const queue = [start]
    const paths = new Map()
    paths.set(`${start[0]},${start[1]}`, null)

    while(queue.length) {
        let cur = queue.shift()

        if (cur[0] === goal[0] && cur[1] === goal[1]) {
            let moves = getPath(start, goal, paths)
            printResult(moves.length - 1, moves)
            break
        }

        const nextMoves = getAllMoves(cur)

        for(let move of nextMoves) {
            if (!paths.has(`${move[0]},${move[1]}`)) {
                queue.push(move)
                paths.set(`${move[0]},${move[1]}`, cur)
            }
        }
    }
}

function printResult(cnt, moves) {
    console.log(`You made it in ${cnt} moves!  Here's your path:`)
    for(let move of moves) {
        console.log(move)
    }
}