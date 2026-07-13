// const { Chess } = require("chess.js");

const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let SourceSquare = null;
let PlayerRole = null;

const renderBoard = () => {
    const board = chess.board();
    boardElement.innerHTML = "";
    board.forEach((row, rowIndex) => {
        row.forEach((square, squareindex) => {
            const squareElement = document.createElement("div");
            squareElement.classList.add("square",
                (rowIndex + squareindex) % 2 === 0 ? "light" : "dark"
            );
            squareElement.dataset.row = rowIndex;
            squareElement.dataset.col = squareindex;

            if (square) {
                const pieceElement = document.createElement("div");
                pieceElement.classList.add("piece", square.color == 'w' ? "white" : "black");

                pieceElement.innerText=getPieceUnicode(square);
                pieceElement.draggable=PlayerRole===square.color;

                pieceElement.addEventListener("dragstart",(e)=>{
                    if(pieceElement.draggable){
                        draggedPiece=pieceElement;
                        SourceSquare={row:rowIndex,col:squareindex};
                        e.dataTransfer.setData("test/plain","");
                    }
                });
                pieceElement.addEventListener("dragend",(e)=>{
                    draggedPiece=null;
                    SourceSquare=null;
                });

                squareElement.appendChild(pieceElement);
            }

            squareElement.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            squareElement.addEventListener("drop",function(e){
                e.preventDefault();
                if(draggedPiece){
                    const targetSource={
                        row:parseInt(squareElement.dataset.row),
                        col:parseInt(squareElement.dataset.col)
                    };
                    handleMove(SourceSquare,targetSource);
                }
            });
                    boardElement.appendChild(squareElement);

        });
    });
    if(PlayerRole==="b"){
        boardElement.classList.add("flipped");
    }
    else{
        boardElement.classList.remove("flipped");
    }
    
};

const handleMove = (source, target) => {
    const files = ["a","b","c","d","e","f","g","h"];

    const move = {
        from: files[source.col] + (8 - source.row),
        to: files[target.col] + (8 - target.row),
        promotion: "q"
    };

    socket.emit("move", move);
};

// const getPieceUnicode = (piece) => {
//     const unicodePieces={
//         // p: "♙",
//         // r: "♖",
//         // n: "♘",
//         // b: "♗",
//         // q: "♕",
//         // k: "♔",
//         p: "♟",
//         r: "♜",
//         n: "♞",
//         b: "♝",
//         q: "♛",
//         k: "♚"
//     };
//     return unicodePieces[piece.type] || "";
// };
const getPieceUnicode = (piece) => {
    const pieces = {
        w:{
            p:"♙",
            r:"♖",
            n:"♘",
            b:"♗",
            q:"♕",
            k:"♔"
        },
        b:{
            p:"♟",
            r:"♜",
            n:"♞",
            b:"♝",
            q:"♛",
            k:"♚"
        }
    };

    return pieces[piece.color][piece.type];
};

socket.on("playerRole", (role) => {
    PlayerRole = role;
    renderBoard();
});

socket.on("boardState", (fen) => {
    chess.load(fen);
    renderBoard();
});

socket.on("spectatorRole", () => {
    PlayerRole = null;
    renderBoard();
});

socket.on("move", (move) => {
    chess.move(move);
    renderBoard();
});

renderBoard();