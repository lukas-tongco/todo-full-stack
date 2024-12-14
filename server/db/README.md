### Documentation

- [Knex.js](https://knexjs.org/guide/)
- [Routes](/server/routes/README.md)

### Creating a *migrations* file & folder

`npm run knex migrate:make [migrations-file-name]` e.g.

    npm run knex migrate:make todos

### Creating a *seeds* file & folder

Placeholder

### Resetting database to its original state

    npm run knex migrate:rollback --all
    npm run knex migrate:latest
    npm run knex seed:run

### Testing functions in db.ts

You can import them into *server.ts* and `console.log()` to see if they work. Make sure to delete them once you're done.