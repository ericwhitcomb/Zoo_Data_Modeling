git init
yarn init -y
yarn add express knex sqlite3
yarn add nodemon -D
touch .gitignore
touch index.js

add to package.json:
  "scripts": { 
    "server": "nodemon" 
  }

add to .gitignore: node_modules