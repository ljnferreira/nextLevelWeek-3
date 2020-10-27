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

app.listen(3333);
