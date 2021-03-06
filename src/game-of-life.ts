export const addAliveCells = (grid: boolean[][], aliveCells: any[]) => {
    aliveCells.forEach((cell) => {
        grid[cell[0]][cell[1]] = true
    })

    return grid
}
export const initGridSpace = (width: number, height: number) => {
    let grid: boolean[][] = []

    for (let w = 0; w < width; w++) {
        let row: boolean[] = []
        for (let h = 0; h < height; h++) {
            row.push(false)
        }
        grid.push(row)
    }

    return grid
}


export const nextStateCell = (neighbours: boolean[], isAlive: boolean = true,) => {
    const count = neighbours.filter((neighbourIsAlive) => neighbourIsAlive).length

    if (isAlive) {
        return count === 2 || count === 3
    } else {
        return count >= 3
    }
}
