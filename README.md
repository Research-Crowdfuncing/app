## sequilize commands:
You might need to install sequelize-cli globally for these commands to work.
```
sequelize db:migrate:undo:all
sequelize db:migrate
sequelize db:seed:all
```

## instructions for forking:
  1. Need to make the config.js with the proper elephantSQL URL.
  2. Have one window with ```webpack --watch```. This will re-transpile the client-side code on any saves, which remakes the bundle js. You might need to install webpack globally.
  3. One window with ```nodemon server/index.js```. This runs the server, and restarts with any changes. If "nodemon is not recognized," you have not installed nodemon globally.