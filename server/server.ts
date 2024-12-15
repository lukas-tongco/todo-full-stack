import express from 'express'
import * as Path from 'node:path'
import todos from './routes/todos'

const server = express()

server.use(express.json())

// API route
server.use('/api/v1/todos', todos) // localhost:3000/api/v1/todos

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode...')
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
