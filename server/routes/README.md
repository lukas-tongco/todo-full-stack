### Documentation

- [Knex.js](https://knexjs.org/guide/)
- [Database](/server/db/README.md)

### How to set up a router

In *server.ts*, add this code:

    server.use('/api/v1/[name]', [route-name])

Replace *name* in the URL with an appropriate name related to your project then add any routes after the comma.

<br>

For a new route, start with this:

    import Router from 'express'
    import * as db from '../db/db.ts'

    const router = Router()

    export default Router

<br>

Make sure to import all routes into *server.ts*:

    import [route-name] from './routes/[route-name].ts'