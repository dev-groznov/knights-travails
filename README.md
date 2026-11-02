# Knights Travails

A JavaScript implementation of finding the shortest path for a knight on a standard $8 \times 8$ chessboard. This project is part of [The Odin Project's Computer Science curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails).

## 📌 Project Overview

In chess, a knight moves in an L-shape: two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular. 

The goal of this project is to build a function `knightMoves` that shows the shortest possible path a knight can take to travel from a starting position to a target position on a chessboard.

## 🚀 Key Concepts & Algorithm

- **Graph Data Structure:** The chessboard is treated as an implicit unweighted graph, where each cell represents a node and valid knight moves represent edges.
- **Breadth-First Search (BFS):** BFS is used to explore moves layer by layer. Because all moves (edges) have equal weight, BFS guarantees finding the shortest path from the starting square to the target square.
- **Path Reconstruction:** A `Map` object tracks the parent (previous square) of each visited cell, allowing the exact path to be backtracked once the destination is reached.

## 🛠️ Code Structure

- `getAllMoves(cell)`: Calculates all valid knight moves from a given square, ensuring moves remain within the board boundaries ($0 \le x, y \le 7$).
- `getPath(start, goal, map)`: Backtracks through the parent map from the goal to the start cell to construct the full path array.
- `knightMoves(start, goal)`: The main function executing the BFS algorithm to find the shortest route.
- `printResult(cnt, moves)`: Formats and prints the results to the console.

## 📋 Prerequisites & Installation

To run this project, you need [Node.js](https://nodejs.org/) installed on your machine.

1. Clone or download this repository.
2. Open your terminal and navigate to the project directory.

## 💻 Usage

Run the file using Node.js:

```bash
node knights-travails.js
```

### Example Usage inside code:

```javascript
knightMoves([0, 0], [3, 3]);
// Output:
// You made it in 2 moves!  Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]
// [ 3, 3 ]

knightMoves([3, 3], [4, 3]);
// Output:
// You made it in 3 moves!  Here's your path:
// [ 3, 3 ]
// [ 1, 2 ]
// [ 2, 4 ]
// [ 4, 3 ]
```

## 🛠️ Built With

* JavaScript (ES6+)
* Node.js