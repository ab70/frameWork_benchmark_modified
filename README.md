
# Backend Web Frameworks benchmark

This is a basic benchmark of backend or web frameworks, here it is kept as similar as possible. From folder stucture to code seperation and functionality.

List of frameworks in test


## Framework List

#### Get all items


| Name | Language     | Description                |
| :-------- | :------- | :------------------------- |
| Expressjs | node(js) |   |
| ElysiaJs(TS) | bunjs(js)  |  |
| ElysiaJs(JS) | bunjs(js)  | Tried to copy full expressjs structure |



## Installation

## 1 . Install ElysiaJsApp 
ElysiaJs application based on bunjs. This is my converted version in js as ElysiaJs supports TS for type safety.

1. Intall bunjs by:
```bash
  curl https://bun.sh/install | bash
```
2. Check bunjs
```bash
  bun --help
```
3. Get into the ElysiaJsApp directory and install dependency by:
```bash
  bun run dev
```
3. Run by:
```bash
  bun run dev

## 2. Install ElysiaJsApp_ts 
ElysiaJs_ts application based on bunjs. This is ts version. But all folder structure and functionality has been kept similar.

1. Intall bunjs by:
```bash
  curl https://bun.sh/install | bash
```
2. Check bunjs
```bash
  bun --help
```
3. Get into the ElysiaJsApp directory and install dependency by:
```bash
  bun i
```
3. Run by:
```bash
  bun run dev
```
## 3. Install ExpressjsApp
ExpressJs is one of the most minimal and feature rich backend framework of nodejs. 

1. Intall nodejs by (version 20.x):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
2. Check nodejs installation
```bash
  node -v
```
3. Get into the ExpressJsApp directory and install dependency by:
```bash
  bun i
```
3. Run by:
```bash
  npm run dev
```
4. If you have bunjs installed you can have minimum 3x faster expressjs by simply running expressjs app by bun:
```bash
  bun run dev
```