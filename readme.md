# Space Traders

Script that plays the game https://spacetraders.io

## Install

```bash
cp .env.example .env
```

Add your `ST_USERNAME` and `ST_TOKEN` to the `.env` file. Replace the `shipId` in the script with your own.

```bash
npm i
```

## Run

```bash
npm start
```

## Build

```bash
npm run build
```

Will output a single file called `index.js` to the `dist` directory. This can than be easily deployed on a server. Don't forget to copy the `.env` file or set the variables yourself.

## Deploy

### Locally

```bash
scp .env aws:~/space-traders/.env
```

```bash
scp dist/index.js aws:~/space-traders/index.js
```

### On the server

```bash
pm2 start space-traders/index.js --no-autorestart --source-map-support
```