import express from 'express';

import './database/conection'

const app = express();

app.use(express.json());

app.get('/users/:id', (request, response)=>{
  return response.json({
    params: request.params,
    query: request.query,
    body: request.body
  })
})

app.post('/users', (request, response)=>{
  return response.json({message: 'post'})
})

app.put('/users', (request, response)=>{
  return response.json({message: 'put'})
})

app.delete('/users', (request, response)=>{
  return response.json({message: 'delete'})
})

app.listen(3333);
