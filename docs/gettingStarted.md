# Getting Started
This guide will help you set up and run the My Ball backend locally. The project tracks basketball players and user betting activity to promote responsible sports betting.

## Prerequisites
Make sure you have the following installed:
- Node.js (version 18 or later recommended)
- npm (comes with Node.js)
- A terminal or command prompt

## Installation 
1. Clone the repository
```bash
git clone https://github.com/mainoahmuna/bball-fin.backend.git
cd bball-fin.backend
```
2. install dependencies
```bash
npm install
```

## Running the Server
for development:
```bash
npm run dev
```

for prod:
```bash
npm run start
```
By default, the server runs on http://localhost:8080. You can change this by editing index.js.

## API Endpoints
Create Player
- *POST* /players
- BODY (JSON):
```json
{
  "name": "LeBron James",
  "team": "Lakers",
  "position": "Forward"
}
```

- Response:
201 Created with the new player object, including an auto-generated id.
If required fields are missing, returns 400 Bad Request.

GET All Players
- *GET* /players
- Response:
    - 200 OK with an array of all players.