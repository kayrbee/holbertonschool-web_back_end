## Setup

Install NodeJS in your home directory

```
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Install Jest, Babel, and ESLint in your project directory

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

Create configuration files in your project directory (with provided content)

- package.json
- babel.config.js
- .eslintrc.js


## Example execution command

`npm run dev 4-main.js`