class TicTacToe {
    constructor() {
        this.symbol = 'x'
        this.board = [[null,null,null],[null,null,null],[null,null,null]]
        this.turn = 0
    }

    getCurrentPlayerSymbol() {
        return this.symbol
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.board[rowIndex][columnIndex]){
            this.board[rowIndex][columnIndex] = this.symbol
            this.turn++
            if(this.symbol === 'x'){
                this.symbol = 'o'
            } else {
                this.symbol = 'x'
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true
        } else {
            return false
        }
    }

    getWinner() {
        if (this.board[0][0] && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) {
            return this.board[0][0];
        }
        if (this.board[1][0] && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) {
            return this.board[1][0];
        }
        if (this.board[2][0] && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) {
            return this.board[2][0];
        }
        if (this.board[0][0] && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) {
            return this.board[0][0];
        }
        if (this.board[0][1] && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) {
            return this.board[0][1];
        }
        if (this.board[0][2] && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) {
            return this.board[0][2];
        }
        if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
            return this.board[0][0];
        }
        if (this.board[2][0] && this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2]) {
            return this.board[2][0];
        }
        return null;
    }

    noMoreTurns() {
        if (this.turn === 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true
        } else {
            return false
        } 
    }

    getFieldValue(rowIndex, colIndex) {
       return this.board[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
