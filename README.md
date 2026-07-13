# ♟️ Real-Time Multiplayer Chess Game

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white">
  <img src="https://img.shields.io/badge/Chess.js-8B4513?style=for-the-badge">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

<p align="center">
A real-time multiplayer Chess game built using <b>Node.js</b>, <b>Express.js</b>, <b>Socket.IO</b>, and <b>Chess.js</b>. Two players can play simultaneously while additional users can join as spectators. The game follows official chess rules and synchronizes every move instantly across all connected clients.
</p>

---

# 📸 Preview

> Add your project screenshots here.

| Home | Gameplay |
|------|----------|
| ![](screenshots/home.png) | ![](screenshots/game.png) |

---

# 🚀 Features

- ♟️ Real-Time Multiplayer Chess
- 🌐 Socket.IO based live communication
- 👥 Two-player support
- 👀 Unlimited Spectators
- 🎯 Drag & Drop Chess Pieces
- 📜 Official Chess Rules using Chess.js
- 🔄 Automatic Board Synchronization
- 🔁 Board Flip for Black Player
- ❌ Illegal Move Prevention
- ⚡ Fast and Lightweight
- 🎨 Responsive Chess Board
- 🖥️ Express + EJS Rendering

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| 🟢 Node.js | Backend Runtime |
| ⚡ Express.js | Server & Routing |
| 🔌 Socket.IO | Real-Time Communication |
| ♟️ Chess.js | Chess Engine & Rules |
| 🎨 HTML/CSS | User Interface |
| 📄 EJS | Server Side Rendering |
| 💛 JavaScript | Client & Server Logic |

---

# 📂 Project Structure

```
Chess-Game/
│
├── public/
│   ├── css/
│   ├── js/
│   │     └── chessgame.js
│   └── images/
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/chess-game.git
```

### 2️⃣ Move into Project

```bash
cd chess-game
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Server

```bash
node server.js
```

or

```bash
npm start
```

### 5️⃣ Open Browser

```
http://localhost:3000
```

---

# 📦 Required Packages

```bash
npm install express
npm install socket.io
npm install chess.js
npm install ejs
```

---

# ⚙️ Project Workflow

## Initialization

- Socket.IO connection is initialized.
- Chess.js object is created.
- Chessboard element is selected from the DOM.
- Variables like `draggedPiece`, `sourceSquare`, and `playerRole` are initialized.
- Initial chessboard is rendered.

---

## Board Rendering

The `renderBoard()` function:

- Creates an 8×8 chessboard.
- Places all chess pieces.
- Assigns drag-and-drop events.
- Updates the board after every move.
- Flips the board for the black player.

---

## Drag & Drop

- Select a chess piece.
- Drag it to a valid square.
- Convert coordinates into Chess.js notation.
- Emit move to the server.

---

## Socket.IO Events

### Client Events

| Event | Description |
|--------|-------------|
| playerRole | Assign player color |
| spectatorRole | Assign spectator |
| boardState | Receive board state |
| move | Receive opponent move |

---

### Server Events

| Event | Description |
|--------|-------------|
| connection | Client connected |
| disconnect | Client disconnected |
| move | Validate move |
| boardState | Broadcast board |

---

# ♟️ Client Side Variables

| Variable | Description |
|----------|-------------|
| socket | Socket.IO connection |
| chess | Chess.js instance |
| boardElement | Chessboard DOM |
| draggedPiece | Piece currently dragged |
| sourceSquare | Starting square |
| playerRole | White / Black / Spectator |

---

# 🧩 Main Functions

## renderBoard()

- Generates chessboard.
- Places pieces.
- Adds drag-and-drop listeners.
- Updates board.

---

## handleMove()

- Converts board coordinates.
- Creates move object.
- Emits move using Socket.IO.

---

## getPieceUnicode()

Returns Unicode chess symbols.

---

# 🌐 Server Side Flow

```
Client Connect
      │
      ▼
Assign White / Black / Spectator
      │
      ▼
Receive Move
      │
      ▼
Chess.js Validation
      │
      ▼
Update Board
      │
      ▼
Broadcast Board State
      │
      ▼
Render Updated Board
```

---

# 📡 Socket.IO Architecture

```
Player 1
     │
     ▼
 Socket.IO
     │
     ▼
Node + Express Server
     │
     ▼
 Chess.js Validation
     │
     ▼
Socket Broadcast
     │
     ▼
Player 2 + Spectators
```

---

# 🎯 Future Improvements

- ♚ Check Indicator
- ♛ Checkmate Screen
- 🤝 Draw Request
- 🏆 Game History
- ⏱️ Chess Clock
- 🔐 Login System
- 💬 Live Chat
- 📈 Leaderboard
- ♟️ PGN Export
- 🌙 Dark Mode

---

# 👨‍💻 Author

**Tinkal Pedhadiya**

GitHub: https://github.com/your-username

---

# ⭐ Support

If you like this project, don't forget to ⭐ the repository.
