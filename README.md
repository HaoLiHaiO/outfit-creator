# Outfit creator

- This project was created with vite and uses React, Express and Typescript.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to get the application running:

### Clone the Repository

```sh
git clone git@github.com:HaoLiHaiO/outfit-creator.git
cd outfit-creator
npm install
```

## How to run

- Make sure you have .env with: VITE_API_URL=http://localhost:5000
- It is already included in this project (not included in .gitignore) because 
it does not contain any sensitive information.

### Docker (Recommended)

This project is containerized:

- docker compose build
- docker compose up
- navigate to localhost:5000 in the browser. The server will be running on localhost:3000 

**OR** in one command:

- docker compose up --build

### In dev mode

- npm install
- npm run dev
